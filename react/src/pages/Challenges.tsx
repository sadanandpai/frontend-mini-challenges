import ChallengeGrid from '@/components/challenges/ChallengeGrid';

function App() {
  return (
    <div className="container text-center">
      <h1>
        Frontend Mini Challenges&nbsp;
        <a href="https://github.com/sadanandpai/frontend-mini-challenges/">
          <img
            style={{
              width: '35px',
              height: '35px',
              verticalAlign: 'text-bottom',
            }}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github repo"
          />
        </a>
      </h1>

      <h4>Challenges built using React</h4>

      <a href="/frontend-mini-challenges/native">Switch to JavaScript version</a>

      <ChallengeGrid />
    </div>
  );
}

export default App;
