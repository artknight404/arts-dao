// Simple DAO library for arts-dao

class ArtsDAO {
  constructor() {
    this.proposals = [];
    this.users = [];
  }

  createProposal(title, description) {
    const proposal = {
      id: this.proposals.length + 1,
      title,
      description,
      votes: 0,
      createdAt: new Date(),
    };
    this.proposals.push(proposal);
    return proposal;
  }

  voteProposal(id) {
    const proposal = this.proposals.find((p) => p.id === id);
    if (proposal) {
      proposal.votes += 1;
      return proposal;
    }
    throw new Error('Proposal not found');
  }

  getProposals() {
    return this.proposals;
  }

  getProposalById(id) {
    const proposal = this.proposals.find((p) => p.id === id);
    if (!proposal) {
      throw new Error('Proposal not found');
    }
    return proposal;
  }

  deleteProposal(id) {
    const index = this.proposals.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Proposal not found');
    }
    const deleted = this.proposals.splice(index, 1)[0];
    return deleted;
  }

  updateProposal(id, updates) {
    const proposal = this.getProposalById(id);
    Object.assign(proposal, updates);
    return proposal;
  }

  getProposalsByVotes(minVotes) {
    return this.proposals.filter((p) => p.votes >= minVotes);
  }

  addUser(userId, name) {
    const user = { userId, name, votes: [] };
    this.users.push(user);
    return user;
  }

  removeUser(userId) {
    const index = this.users.findIndex((u) => u.userId === userId);
    if (index === -1) {
      throw new Error('User not found');
    }
    const removedUser = this.users.splice(index, 1)[0];
    return removedUser;
  }

  getUserVotes(userId) {
    const user = this.users.find((u) => u.userId === userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user.votes;
  }

  getProposalsByUser(userId) {
    const user = this.users.find((u) => u.userId === userId);
    if (!user) {
      throw new Error('User not found');
    }
    return this.proposals.filter((p) => user.votes.includes(p.id));
  }

  getProposalsByDateRange(startDate, endDate) {
    return this.proposals.filter((p) => p.createdAt >= startDate && p.createdAt <= endDate);
  }
}

module.exports = ArtsDAO; 