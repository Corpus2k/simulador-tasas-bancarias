import puppeteer from 'puppeteer';
import fs from 'fs';
const urlWeb = `https://www.sbs.gob.pe/app/pp/EstadisticasSAEEPortal/Paginas/TIActivaTipoCreditoEmpresa.aspx?tip=B`;

const main = async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto(urlWeb, { waitUntil: 'networkidle2' });

	await page.waitForSelector('#ctl00_cphContent_rpgActualMn_OT');

	const tableMain = await page.evaluate(() => {
		const tabla = document.getElementById(
			'ctl00_cphContent_rpgActualMn_OT'
		);
		if (!tabla) return [];

		const tablaData = tabla.querySelector(
			'#ctl00_cphContent_rpgActualMn_ctl00_DataZone_DT'
		);

		const categoryStructure = [];
		let currentMainCategory = null;

		Array.from(
			tabla.querySelectorAll(
				'td.rpgRowHeaderField.rpgRowHeader.APLI_fila1_new'
			)
		).forEach((td) => {
			const isMainCategory = td.querySelector('b') !== null;
			const categoryName = td.innerText.trim();

			if (isMainCategory) {
				currentMainCategory = {
					name: categoryName,
					items: [{ type: 'main', name: categoryName }],
				};
				categoryStructure.push(currentMainCategory);
			} else if (currentMainCategory) {
				currentMainCategory.items.push({
					type: 'sub',
					name: categoryName,
				});
			}
		});

		const bancos = Array.from(
			tablaData.querySelectorAll(
				'th.rpgColumnHeader.APLI_fila2_new.APLI_columnaACT_new'
			)
		).map((th) => th.innerText.trim());

		const tasasPorBanco = {};
		bancos.forEach((banco, index) => {
			tasasPorBanco[banco] = Array.from(
				tablaData.querySelectorAll(
					`tr td:nth-child(${index + 1}).rpgDataCell.APLI_fila2_new`
				)
			).map((td) => td.innerText.trim());
		});

		const resultsBancos = {};

		bancos.forEach((banco) => {
			resultsBancos[banco] = {};
			let tasaIndex = 0;

			categoryStructure.forEach((categoryGroup) => {
				const categoryName = categoryGroup.name;
				resultsBancos[banco][categoryName] = [];

				categoryGroup.items.forEach((item) => {
					resultsBancos[banco][categoryName].push({
						categoria: item.name,
						tasa: tasasPorBanco[banco][tasaIndex] || '-',
					});
					tasaIndex++;
				});
			});
		});

		return { resultsBancos };
	});

	fs.writeFileSync(
		'src/data/tasasBancarias.json',
		JSON.stringify(tableMain, null, 2)
	);
	console.log('Datos extraídos y guardados correctamente');
	await browser.close();
};

main();
