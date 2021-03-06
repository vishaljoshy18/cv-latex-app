import React, { useState, useEffect } from 'react';
import EducationForm from './EducationForm/EducationForm';
import ExperienceForm from './ExperienceForm/ExperienceForm';
import GeneralForm from './GeneralForm/GeneralForm';

function FormComponent({ getFormData }) {
	const [generalData, setGeneralData] = useState('');
	const [educationData, setEducationData] = useState('');
	const [experienceData, setExperienceData] = useState('');

	useEffect(() => {
		return () => {};
	}, [generalData, educationData, experienceData]);

	const onClickSubmit = (e) => {
		e.preventDefault();
		getFormData({
			generalData: generalData,
			educationData: educationData,
			experienceData: experienceData,
		});
	};
	return (
		<div className='flex flex-col'>
			<GeneralForm getGeneralData={(data) => setGeneralData(data)} />
			<EducationForm getEducationData={(data) => setEducationData(data)} />
			<ExperienceForm getExperienceData={(data) => setExperienceData(data)} />
			<button className='p-1 bg-gray-500 m-auto text-white' onClick={onClickSubmit}>Submit</button>
		</div>
	);
}

export default FormComponent;
