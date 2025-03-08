import GetField from './methods/getField';
import GetAll from './methods/all';

export default function LoanObjectExamples() {
	return (
		<div className='flex flex-col p-4'>
			<div>
				<h1 className='text-2xl font-bold'>Loan Object Examples</h1>
			</div>
			<div>
				<GetField />
				<GetAll />
			</div>
		</div>
	);
}
