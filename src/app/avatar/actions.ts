'use server';

import Replicate, { FileOutput } from "replicate";

const replicate = new Replicate({
	auth: process.env.REPLICATE_API_TOKEN,
});

export async function create(formData: FormData) {
	const file = formData.get('image') as File;

	const bytes = await file.arrayBuffer();
	const buffer = Buffer.from(bytes);
	const base64Image = buffer.toString('base64');

	const input = {
		prompt: "An img of an ancient Camunian, inspired by the prehistoric inhabitants of the Alps. They wear primitive clothing made of fur and leather, accessorized with a necklace of oversized carved stones.",
		num_steps: 55,
		input_image: `data:${file.type};base64,${base64Image}`
	};


	const output = (await replicate.run("tencentarc/photomaker:ddfc2b08d209f9fa8c1eca692712918bd449f695dabb4a958da31802a9570fe4", { input })) as FileOutput[];

	const url = output[0].url();
	return url.href;
}
