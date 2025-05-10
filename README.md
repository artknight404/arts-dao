# arts-dao

Simple DAO library for managing proposals and votes.

## Installation

```bash
npm install arts-dao
```

## Usage

```js
const ArtsDAO = require('arts-dao');
const dao = new ArtsDAO();

dao.createProposal('Add new feature', 'Description of the feature');
dao.voteProposal(1);
console.log(dao.getProposals());
```

## API
- `createProposal(title, description)` - Create a new proposal
- `voteProposal(id)` - Vote for a proposal by id
- `getProposals()` - Get all proposals
- `getProposalById(id)` - Get a proposal by its id
- `deleteProposal(id)` - Delete a proposal by its id
- `updateProposal(id, updates)` - Update a proposal by its id with new data
- `getProposalsByVotes(minVotes)` - Get proposals with votes greater than or equal to minVotes

## Examples

### Get a Proposal by ID
```js
const proposal = dao.getProposalById(1);
console.log(proposal);
```

### Delete a Proposal
```js
const deletedProposal = dao.deleteProposal(1);
console.log('Deleted proposal:', deletedProposal);
```

### Update a Proposal
```js
const updatedProposal = dao.updateProposal(1, { title: 'Updated Title', description: 'Updated Description' });
console.log('Updated proposal:', updatedProposal);
```

### Get Proposals by Minimum Votes
```js
const popularProposals = dao.getProposalsByVotes(5);
console.log('Popular proposals:', popularProposals);
```


## Contributor

- [@gulagulali404](https://github.com/gulagulali404/)
- [@yunnie-pin](https://github.com/Yunnie-pin)
- [@artknight404](https://github.com/artknight404)
- [@aru-problemsolver68](https://github.com/aru-problemsolver68)
- [@msaruh11](https://github.com/msaruh11)