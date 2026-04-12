import { useState } from 'react';

import './App.css'
import AddTaskModal from './components/AddTaskModal'

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
  <>
  <div className='container'>
    <div className='add-area'>+</div>
    <AddTaskModal />
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
          Был канун зимнего Николина дня, 5-е декабря 1820 года. В этот год Наташа с детьми и мужем с начала осени гостила у брата, Пьер был в Петербурге, 
        куда он поехал по своим особенным делам, как он говорил, на три недели, и где он теперь проживал уже седьмую. Его ждали каждую минуту.
5-го декабря, кроме семейства Безуховых, у Ростовых гостил еще старый друг Николая, отставной генерал Василий Федорович Денисов.
6-го числа, в день торжества, в который съедутся гости, Николай знал, что ему придется снять бешмет, надеть сюртук и с узкими носками узкие сапоги и ехать в новую 
построенную им церковь, а потом принимать поздравления и предлагать закуски и говорить о дворянских выборах и урожае; но канун дня он еще считал себя вправе провести обычно. 
До обеда Николай проверил счеты бурмистра из рязанской деревни, по именью племянника жены, написал два письма по делам и прошелся на гумно, скотный и конный дворы. 
Приняв меры против ожидаемого на завтра общего пьянства по случаю престольного праздника, он пришел к обеду и, не успев с глазу на глаз переговорить с женою, 
сел за длинный стол в двадцать приборов, за который собрались все домашние. За столом были мать, жившая при ней старушка Белова, жена, трое детей, гувернантка, 
гувернер, племянник с своим гувернером, Соня, Денисов, Наташа, ее трое детей, их гувернантка и старичок Михаил Иваныч, архитектор князя, живший в Лысых Горах на покое.
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
