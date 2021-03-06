import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Votes = ({ selected, votes }) => <p>Has {votes[selected]} votes</p>;



const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const random = Math.floor(Math.random() * anecdotes.length);

  const vote = selected => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  // Finding the index of anecdote with the most votes
  const mostVotedIndex = votes.indexOf(Math.max.apply(null, votes));
  const mostVoted = anecdotes[mostVotedIndex];
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Votes votes={votes} selected={selected} />
      <Button handleClick={() => vote(selected)} text="Vote" />
      <Button handleClick={() => setSelected(random)} text="Next One" />
      <h1>Anecdote with most votes</h1>

      <p>{mostVoted}</p>
      <Votes votes={votes} selected={mostVotedIndex} />
    </div>
  );
};

export default App;
