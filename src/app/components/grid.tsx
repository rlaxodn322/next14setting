import React from 'react';

const divparents: React.CSSProperties = {
  margin: '0 auto',
  width: '1200px',
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'space-between',
};
const divstyle: React.CSSProperties = {
  padding: '15px 90px',
  border: '1px solid black',
};
const App: React.FC = () => (
  <>
    <div style={divparents}>
      <div style={divstyle}></div>
      <div style={divstyle}></div>
      <div style={divstyle}></div>
      <div style={divstyle}></div>
      <div style={divstyle}></div>
      <div style={divstyle}></div>
    </div>
  </>
);

export default App;
