import prisma from '$lib/prisma';
import { log } from 'console';

export async function POST({ request }) {
	const reqBody = await request.json();

	const { nama, status, asal, jenis_kelamin } = reqBody;
	const kode_unik = generateKodeUnik();

	const pasanganTerakhir = await prisma.pengguna.findFirst({
		where: {
			namaAsal: asal
		},
		orderBy: { pasangan: 'desc' }
	});

	if (!pasanganTerakhir) {
		try {
			await prisma.pengguna.create({
				data: {
					nama,
					kode_unik,
					namaAsal: asal,
					status,
					jenis_kelamin,
					pasangan: 1
				}
			});

			return new Response(JSON.stringify({ code: kode_unik }));
		} catch (error) {
			return new Response(JSON.stringify({ message: 'Nama terduplikasi' }), { status: 400 });
		}
	}

	if (pasanganTerakhir) {
		const jumlahPasangan = await prisma.pengguna.count({
			where: {
				pasangan: pasanganTerakhir.pasangan,
				namaAsal: asal
			}
		});

		if (jumlahPasangan === 2) {
			try {
				await prisma.pengguna.create({
					data: {
						nama,
						kode_unik,
						namaAsal: asal,
						status,
						jenis_kelamin,
						pasangan: pasanganTerakhir.pasangan + 1
					}
				});

				return new Response(JSON.stringify({ code: kode_unik }));
			} catch (error) {
				return new Response(JSON.stringify({ message: 'Nama terduplikasi' }), { status: 400 });
			}
		} else {
			try {
				await prisma.pengguna.create({
					data: {
						nama,
						kode_unik,
						namaAsal: asal,
						status,
						jenis_kelamin,
						pasangan: pasanganTerakhir.pasangan
					}
				});

				return new Response(JSON.stringify({ code: kode_unik }));
			} catch (error) {
				return new Response(JSON.stringify({ message: 'Nama terduplikasi' }), { status: 400 });
			}
		}
	}

	// @ts-ignore
	// async function createPengguna(pasangan) {
	// 	try {
	// 		const kode_unik = generateKodeUnik();

	// 		await prisma.pengguna.create({
	// 			data: {
	// 				nama,
	// 				kode_unik,
	// 				namaAsal: asal,
	// 				status,
	// 				jenis_kelamin,
	// 				pasangan
	// 			}
	// 		});

	// 		return new Response(JSON.stringify({ code: kode_unik }));
	// 	} catch (error) {
	// 		return new Response(JSON.stringify({ message: 'Nama terduplikasi' }), { status: 400 });
	// 	}
	// }
}

function generateKodeUnik() {
	let kode = '';

	for (let i = 1; i <= 5; i++) {
		const random = Math.floor(Math.random() * 10);

		kode = `${kode}${random}`;
	}

	return parseInt(kode);
}
