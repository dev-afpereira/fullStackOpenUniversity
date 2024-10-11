import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack';
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  );
};

export default App;