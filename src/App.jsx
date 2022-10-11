import { useState } from 'react';
import styles from './App.module.css'

function App() {
  // const [items, setItems] = useState([4, 3, 2, 1])
  const [toShow, setToShow] = useState(false)
  const [arraySize, setArraySize] = useState(0)

  const [stepsSort, setStepsSort] = useState([])

  const handleButtonConfig = () => {
    setToShow(!toShow)
  }

  const bubbleSort = (items) => {
    let steps = []
    steps.push([...items])
    console.log(items)
    for (let i = 0; i < items.length; i++) {

      // Last i elements are already in place 
      for (let j = 0; j < (items.length - i - 1); j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (items[j] > items[j + 1]) {
          // If the condition is true then swap them
          let temp = items[j]
          items[j] = items[j + 1]
          items[j + 1] = temp
          console.log(items)
          steps.push([...items])
        }
      }
    }
    setStepsSort(steps);
  }

  return (
    <div>
      {/*
      <p>Tamanho do Vetor</p>
      <input type="number" onChange={e => setArraySize(parseInt(e.target.value))} />
      <p>{arraySize}</p>
      */}
      <div className={styles.configButton}>
        <span onClick={handleButtonConfig}>Adicionar Elementos</span>
        {toShow &&
          <div className={styles.teste}>
            <p>Adicione os elementos (Separados por vírgula)</p>
            <input type="text" id="input-numbers" />
          </div>
        }
      </div>
      {/*
      <div>
        <select id="">
          <option value="">Ordenado</option>
          <option value="">Invertido</option>
          <option value="">Aleatório</option>
        </select>
      </div>
      */}

      <button onClick={() => bubbleSort(document.getElementById('input-numbers').value.split(','))}>Gerar</button>
      <table className={styles.tableStepsSort}>
        <thead>

        </thead>
        <tbody style={{ color: 'white' }}>
          {
            stepsSort.map((row, key) => (
              <tr key={key}>
                {
                  row.map((column) => (
                    <td key={column}>{column}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
