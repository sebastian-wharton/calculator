import "./index.css"

function App() {
	return (
		<div className='App'>
			<h1>React Calculator</h1>
			<div className='calculator'>
				<div className='outputs'>
					<div className='previous'></div>
					<div className='current'></div>
				</div>

				<button className='span symbol'>AC</button>
				<button className='symbol'>C</button>
				<button className='symbol'>/</button>
				<button className='number'>1</button>
				<button className='number'>2</button>
				<button className='number'>3</button>
				<button className='symbol'>*</button>
				<button className='number'>4</button>
				<button className='number'>5</button>
				<button className='number'>6</button>
				<button className='symbol'>+</button>
				<button className='number'>7</button>
				<button className='number'>8</button>
				<button className='number'>9</button>
				<button className='symbol'>-</button>
				<button className='symbol'>.</button>
				<button className='number'>0</button>
				<button className='span symbol'>=</button>
			</div>
		</div>
	);
}

export default App;
