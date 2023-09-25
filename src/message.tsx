function Keyboard() {
  const keys = ["A", "B", "C", "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'];

  return (
    <>
      <div className="container">
        {keys.map((key) => (
          <button type='button' className='btn btn-primary' style={{margin: '0.5rem'}}>{key}</button>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
