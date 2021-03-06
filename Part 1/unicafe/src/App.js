import React, { useState } from 'react';

const Button = ({ stat, event }) => <button onClick={event}>{stat}</button>;

const Statistic = ({ stat, value }) => {
  return (
    <tr>
      <td>{stat}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  if (stats.good + stats.neutral + stats.bad === 0) {
    return <div>No Feedback yet</div>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <Statistic stat={'Good'} value={stats.good} />
            <Statistic stat={'Neutral'} value={stats.neutral} />
            <Statistic stat={'Bad'} value={stats.bad} />
            <Statistic
              stat={'Total'}
              value={stats.good + stats.neutral + stats.bad}
            />
            <Statistic
              stat={'Average'}
              value={
                (stats.good * 1 + stats.neutral * 0 + stats.bad * -1) /
                stats.good +
                stats.neutral +
                stats.bad
              }
            />
            <Statistic
              stat={'Positive'}
              value={
                (stats.good * 100) / (stats.good + stats.neutral + stats.bad)
              }
            />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Feedback</h1>
      <Button stat="good" event={() => setGood(good + 1)} />
      <Button stat="neutral" event={() => setNeutral(neutral + 1)} />
      <Button stat="bad" event={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <Statistics stats={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
