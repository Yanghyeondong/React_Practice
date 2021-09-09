import './App.css';
import ArrayTest from './compo/ArrayTest';
import Divline from './compo/div_line';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Divline name="Firebase + React Test by 양현동">
					<div> 아래의 기능들은 Firebase와 React 연동 연습 기록입니다.</div>
				</Divline>

				<Divline name="1. 데이터 베이스 접근">
					<ArrayTest />
					<div> <br />새로 고침해도 여전히 주소가 남아있다면
						<br />데이터베이스 연동 성공!</div>
				</Divline>
				
				<Divline name="2. 실시간 채팅 게시판">
				</Divline>
					
			</header>
		</div>
	);
}

export default App;