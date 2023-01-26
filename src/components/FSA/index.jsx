import React from 'react';
import avatar from '@images/main-avatar.jpg';
import bg from '@images/FSA_bg.jpg';
import doc from '@resources/doc.pdf';

import scss from './styles.module.scss'

const FSA = (events) => {
	const {} = events;
	
	return (<>
		<img src={bg} className={scss['FSA-bg']}/>
		<div className={`${scss.wrap} container`}>
			<div className={`${scss.block}`} data-block='info'>
				<h2 className={scss.title}>
					ФСА <br/>
					 Конструктор места происшествия <br/>
				</h2>
				<p> Кроссплатформенное (мобильное / десктоп) приложение для автоматизации следственных действий на месте происшествия, а также сопутствующих задач в отделе (управлении). Быстрое описание мест происшествий (создание карт, информационных слоёв, планов помещений), создание архива фото-, видеоматериалов, создание типовых документов (акты, протоколы, фототаблицы, унифицированные описания осмотров мест происшествий. Автоматизация документарного сопровождения следственных действий (акты, протоколы), визуализация места происшествия (карты, планы, схемы, фототаблицы, импорт геопространственных данных), универсальная среда работы: и на выезде, и в отделе (управлении), хранение материалов расследуемых происшествий в виде электронного архива. <br/>
					  	 <br/>
					  		</p>	
			<h2 className={scss.title}> СИСТЕМА УПРАВЛЕНИЯ РАССЛЕДОВАНИЯМИ </h2>
				<p> Интеллектуальная система общественной безопасности «Умного города»поддержка принятия решений, основанная на алгоритмах искусственного интеллекта (машинное обучение, большие данные) и ГИС-технологиях выявление серийных моделей преступлений, прогнозирование преступлений, управление цифровыми и вещественными доказательствами (сбор, хранение, прослеживаемость, подтверждение подлинности) сокращение временных трудозатрат при проведении расследования, оптимизация распределения ресурсов, повышение уровня раскрываемости преступлений, снижение уровня преступности </p>
			</div>
		</div>
	</>);

}

export default FSA;