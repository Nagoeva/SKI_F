import React, {useState, useEffect} from 'react';
import scss from './styles.module.scss'
import jsonData from './data.json'



function changeAnimText(textValue){
	const [opacity, setOpacity] = useState('0');
	const [text, setText] = useState('');

	useEffect(()=>{
		setOpacity('0');

		const opacityTimeout =  setTimeout(()=>{
			setOpacity('1');
			setText(textValue)
		}, 	500)

		return ()=>{
			clearTimeout(opacityTimeout);
		}

	},[textValue])



	return (
		<p className='text' style={{opacity: opacity}}>{text}</p>
	)
}




const ViewImportant = (events) => {
	const {} = events;
	const [blocks, setBloks] = useState(jsonData?.data || [])

	useEffect(()=>{	setBloks(jsonData.data) }, [jsonData])

	useEffect(()=>{
		const changeTextInterval = setInterval(()=>{
			setBloks(prev => {
				let result = [...prev];
				
				result.map(el => {
					let block = el;
					let maxLength = block.text.length - 1;
					if(block.activeText >= maxLength) block.activeText = 0;
					if(block.activeText < maxLength) block.activeText++;
				})

				return result;
			})
		}, jsonData.time * 1000)


		return ()=>{
			clearInterval(changeTextInterval);
		}

	},[])


	
	return (<>
		<div className={scss.wrap}>
			<div className={`${scss.grid} container`}>
				{blocks.map((el, i) => (
					<div className="grid__block" key={i}>
						<h2 className="title">{el.title}</h2>
						{changeAnimText(el.text[el.activeText])}
					</div>
				))}
			</div>			
		</div>
	</>);
}

export default ViewImportant;


