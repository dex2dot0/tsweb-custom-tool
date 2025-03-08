import emssf from '@elliemae/em-ssf-guest';

emssf.connect();

export default function GetField() {
	async function getField4000() {
		const field4000 = await emssf.getObject('loan').then((loan) => loan.getField('4000'));
		alert(`Field 4000 Value: ${field4000}`);
	}
	return (
		<button
			onClick={getField4000}
			className='bg-gray-200 text-black font-medium py-2 px-4 m-2 rounded'
		>
			loanObject.getField()
		</button>
	);
}
