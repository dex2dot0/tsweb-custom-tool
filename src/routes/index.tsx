import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/header';
import WarningBanner from '../components/warningBanner';
import LoanObjectExamples from '../components/loanObject';

export const Route = createFileRoute('/')({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div>
			<Header />
			<WarningBanner />
			<LoanObjectExamples />
		</div>
	);
}
