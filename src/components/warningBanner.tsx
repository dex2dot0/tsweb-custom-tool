export default function WarningBanner() {
	return (
		<div className='bg-yellow-300 text-yellow-900 p-4 rounded-md shadow-md'>
			<p className='font-bold'>Warning:</p>
			<p>
				This example application is not meant for production use, is not a good model or
				representation of a production ready application, and is for example purposes
				only!
			</p>
		</div>
	);
}
