function skillsMember() {
  const member = this;
  return {
    skills: member.skills.map(skill => skill.name)
  };
}