import emssf from '@elliemae/em-ssf-guest';

emssf.connect();

export default function GetAll() {
	async function getAll() {
		const loanObjAll = await emssf.getObject('loan').then((loan) => loan.all());
		console.log(`All: ${JSON.stringify(loanObjAll, null, 2)}`);
		alert('Check console for output');
	}
	return (
		<button
			onClick={getAll}
			className='bg-gray-200 text-black font-medium py-2 px-4 m-2 rounded'
		>
			loanObject.all()
		</button>
	);
}
