import React, {useState} from 'react';

import './App.css'
import AddTaskModal from './components/AddTaskModal'

function App() {
  const [isModalOpen ,setIsModalOpen] = useState(false);
  return (
  <>
  <div className='container'>
    <button className='add-area' onClick={() => setIsModalOpen(true)}>+</button>
    <AddTaskModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}>
      <span>modalka</span>
    </AddTaskModal>
    <div className='settings-area'>⚙️</div>
    <div className='check-bar'>
      <div className='cell'>✔</div>
      <div className='cell'>✔</div>
      <div className='cell'>✔</div>
      <div className='cell'>✔</div>
      <div className='cell'>✔</div>
    </div>
    <div className='topic-bar'>
      <div className='cell'>работа</div>
      <div className='cell'>дом</div>
      <div className='cell'>мелочи</div>
      <div className='cell'>мечта</div>
      <div className='cell'>поездка</div>
    </div>
    <div className='tasks'>
      <div className='cell'>
        <div className='cell-content'>
          много текста
        </div>
      </div>
      <div className='cell'>убраться на 2 этаже</div>
      <div className='cell'>купить стиральный порошок</div>
      <div className='cell'>отложить 2000р на вклад</div>
      <div className='cell'>собрать чемодан</div>
    </div>
    <div className='time'>
      <div className='cell'>08:30</div>
      <div className='cell'>10:10</div>
      <div className='cell'>13:15</div>
      <div className='cell'>19:40</div>
      <div className='cell'>21:20</div>
    </div>
    <div className='date'>
      <div className='cell'>01.10.2026</div>
      <div className='cell'>01.10.2026</div>
      <div className='cell'>02.11.2026</div>
      <div className='cell'>14.12.2026</div>
      <div className='cell'>02.01.2027</div>
    </div>
  </div>
  </>
  )
}

export default App
