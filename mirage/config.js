export default function() {
  this.get('/evaluations/:id');
  this.get('/evaluations');
  this.post('/evaluations');
  this.get('/skill-tests');
  this.post('/skill-tests');
}
