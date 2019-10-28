import React, { useState } from 'react';
import './App.css';
import { DoubleLinkedList } from './DoubleLinkedList.js';

function App() {

  const [list, setList] = useState(new DoubleLinkedList());
  const [nodeData, setNodeData] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <div className="container p-2">
        <div className="row mb-4">
          <div className="col-2">
            <label>New Node name:</label>
          </div>
          <div className="col-8">
            <input className="form-control" value={nodeData} onChange={(e) => setNodeData(e.target.value)}></input>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Node data</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.asArray().map((node,i) => {
                    return(
                    <tr key={i}>
                      <td><input type="radio" checked={node===selectedNode} name="nodes" onChange={() => setSelectedNode(node)}></input></td>
                      <td>{node.data}</td>
                    </tr>
                    )
                  }
                    
                  )
                }
              </tbody>

            </table>
          </div>
          <div className="col-4">
            <div className="row mb-1">
              <button className="btn btn-light" onClick={() => {
                list.addNodeAtStart(nodeData);
                setList(list);
                setCounter(counter + 1);
              }}>Inserir no início</button>
            </div>
            <div className="row mb-1">
              <button className="btn btn-light" onClick={() => {
                list.addNodeAtEnd(nodeData);
                setList(list);
                setCounter(counter + 1);
              }}>Inserir no fim</button>
            </div>
            <div className="row mb-1" >
              <button className="btn btn-light"onClick={() => {
                list.addNodeBefore(nodeData, selectedNode);
                setList(list);
                setCounter(counter + 1);
              }}>Inserir antes de</button>
            </div>
            <div className="row mb-1">
              <button className="btn btn-light"onClick={() => {
                list.addNodeAfter(nodeData, selectedNode);
                setList(list);
                setCounter(counter + 1);
              }}>Inserir depois de</button>
            </div>
            <div className="row mb-1">
              <button className="btn btn-light" onClick={() => {
                list.removeNodeAtStart();
                setList(list);
                setCounter(counter - 1);
              }}>Remover do inicio</button>
            </div>
            <div className="row mb-1" >
              <button className="btn btn-light"onClick={() => {
                list.removeNodeAtEnd();
                setList(list);
                setCounter(counter - 1);
              }}>Remover do fim</button>
            </div>
            <div className="row mb-1">
              <button className="btn btn-light" onClick={() => {
                list.removeNode(selectedNode);
                setList(list);
                setSelectedNode(null);
                setCounter(counter - 1);
              }}>Remover selecionado</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
