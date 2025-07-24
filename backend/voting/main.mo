import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Array "mo:base/Array";
import Runtime "mo:base/Runtime";


func replace<T>(arr : [T], index : Nat, newVal : T) : [T] {
  Array.tabulate<T>(arr.size(), func(i) {
    if (i == index) { newVal } else { arr[i] }
  });
}


actor Voting {

  type Option = {
    id : Nat;
    text : Text;
  };

  type Proposal = {
    id : Nat;
    title : Text;
    options : [Option];
    votes : [Nat];
    voted : [Principal];
    isOpen : Bool;
  };

  private stable var proposals : [Proposal] = [];
  private var nextProposalId : Nat = 0;

  public func createProposal(title : Text, options : [Text]) : async Nat {
    let optionList : [Option] = Array.tabulate<Option>(
      options.size(),
      func(i) { { id = i; text = options[i] } }
    );

    let voteCounts : [Nat] = Array.init<Nat>(options.size(), func _ = 0); // ✅ Fix var Nat issue

    let proposal : Proposal = {
      id = nextProposalId;
      title = title;
      options = optionList;
      votes = voteCounts;
      voted = [];
      isOpen = true;
    };

    proposals := Array.append<Proposal>(proposals, [proposal]);
    nextProposalId += 1;

    return proposal.id;
  };

  public func castVote(proposalId : Nat, optionIndex : Nat) : async Text {
    let caller = Runtime.caller(); // ✅ Fix: use fromCaller() not fromActor()

    if (proposalId >= proposals.size()) {
      return "Invalid proposal ID";
    };

    let prop = proposals[proposalId];

    if (not prop.isOpen) {
      return "Voting is closed";
    };

    if (Array.indexOf<Principal>(prop.voted, caller, func(a, b) = a == b) != null) {
      return "Already voted";
    };

    if (optionIndex >= prop.votes.size()) {
      return "Invalid option selected";
    };

    var newVotes = prop.votes;
    newVotes[optionIndex] += 1;

    let updatedProposal : Proposal = {
      id = prop.id;
      title = prop.title;
      options = prop.options;
      votes = newVotes;
      voted = Array.append<Principal>(prop.voted, [caller]);
      isOpen = prop.isOpen;
    };

    proposals := replace<Proposal>(proposals, proposalId, updatedProposal); // ✅ Fix immutable update

    return "Vote recorded!";
  };

  public func closeProposal(proposalId : Nat) : async Text {
    if (proposalId >= proposals.size()) {
      return "Invalid proposal ID";
    };

    let prop = proposals[proposalId];

    let closedProp : Proposal = {
      id = prop.id;
      title = prop.title;
      options = prop.options;
      votes = prop.votes;
      voted = prop.voted;
      isOpen = false;
    };

    proposals := Array.replace<Proposal>(proposals, proposalId, closedProp); // ✅ Fix immutable update

    return "Proposal closed";
  };

  public query func getProposal(proposalId : Nat) : async ?Proposal {
    if (proposalId >= proposals.size()) {
      return null;
    };
    return ?proposals[proposalId];
  };
};
