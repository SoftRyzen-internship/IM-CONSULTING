// import about from '@/data/.json';
import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';

const items = [
	{
		id: '01',
		title: 'Елемент 1',
		content: [
			{
				subtitle: 'Елемента 1.1',
				text: 'Вміст елемента 1.1'
			},
			{
				subtitle: 'Елемента 1.2',
				text: 'Вміст елемента 1.2'
			},
			{
				subtitle: 'Елемента 1.3',
				text: 'Вміст елемента 1.3'
			}
		]
			
	},
	{
		id: '02',
		title: 'Елемент 2',
		content: [
			{
				subtitle: 'Елемента 2.1',
				text: 'Вміст елемента 2.1'
			},
			{
				subtitle: 'Елемента 2.2',
				text: 'Вміст елемента 2.2'
			},
			{
				subtitle: 'Елемента 2.3',
				text: 'Вміст елемента 2.3'
			}
		]
	},
	{
		id: '03',
		title: 'Елемент 3',
		content: [
			{
				subtitle: 'Елемента 3.1',
				text: 'Вміст елемента 3.1'
			},
			{
				subtitle: 'Елемента 3.2',
				text: 'Вміст елемента 3.2'
			},
			{
				subtitle: 'Елемента 3.3',
				text: 'Вміст елемента 3.3'
			}
		]
	},
];

export const Test = () => {
  return (
    <section className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
			<Container>
				<Accordion items={items}/>
      </Container>
    </section>
  );
};
