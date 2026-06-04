export class Resume {
  constructor({ fileName, score, category, matchedSkills = [], missingSkills = [] }) {
    this.fileName = fileName;
    this.score = score;
    this.category = category;
    this.matchedSkills = matchedSkills;
    this.missingSkills = missingSkills;
  }
}
