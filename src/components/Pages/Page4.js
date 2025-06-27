const Page4 = () => {
    return (
    <div onClickCapture={() => { /* this runs first */ }}>
  <button onClick={e => e.stopPropagation()} >button1</button>
  <button onClick={e => e.stopPropagation()} >button2</button>
</div>
    
        
    )
}
export default Page4;
