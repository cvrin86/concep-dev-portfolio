const coder = {
  name: 'Claire L.',
  skills: ['Java', 'Spring Boot', 'Hibernate'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 3
    );
  }
};

// React component to display the code
function ProfileHero() {
  return (
    <pre style={{
      background: '#0d1117',
      color: '#c9d1d9',
      padding: '1.5rem',
      borderRadius: '10px',
      fontSize: '1rem',
      fontFamily: 'monospace',
      overflowX: 'auto'
    }}>
      <code>
{`const coder = {
  name: 'Claire L.',
  skills: ['Java', 'Spring Boot', 'Hibernate'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 3
    );
  }
};`}
      </code>
    </pre>
  );
}

export default ProfileHero;
