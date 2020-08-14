var chai = require('chai');
var chaiHttp=require('chai-http');
import app from '../src/server';


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('/POST convert - Fahrenheit to Rankine conversion', () => {
    it('it should return 200 -correct', done => {
     chai
      .request(app)
      .post('/convert')
      .send({
       
        initialValue : 84.2,
        initialUnit : "Fahrenheit",
        targetUnit : "Rankine",
        studentResponse : 543.94
    
    
      })
      .end((err, res) => {
       res.should.have.status(200)
       res.body.should.be.an('object')
       res.body.should.include.keys('output')
       res.body.should.have.property('output').eql('correct')
       done()
      })
    })
   })

   describe('/POST convert - Kelvin to Fahrenheit conversion', () => {
    it('it should return 200 - incorrect', done => {
     chai
      .request(app)
      .post('/convert')
      .send({
       
        initialValue : 317.33,
        initialUnit : "Kelvin",
        targetUnit : "Fahrenheit",
        studentResponse : 111.554
    
    
      })
      .end((err, res) => {
       res.should.have.status(200)
       res.body.should.be.an('object')
       res.body.should.include.keys('output')
       res.body.should.have.property('output').eql('incorrect')
       done()
      })
    })
   })  

   describe('/POST convert - Cups to Liters conversion', () => {
    it('it should return 200 - correct', done => {
     chai
      .request(app)
      .post('/convert')
      .send({
       
        initialValue : 25.6,
        initialUnit : "cups",
        targetUnit : "liters",
        studentResponse : 6.1
    
    
      })
      .end((err, res) => {
       res.should.have.status(200)
       res.body.should.be.an('object')
       res.body.should.include.keys('output')
       res.body.should.have.property('output').eql('correct')
       done()
      })
    })
   })  

   describe('/POST convert - Gallons to Kelvin conversion', () => {
    it('it should return 200 - invalid', done => {
     chai
      .request(app)
      .post('/convert')
      .send({
       
        initialValue : 73.12,
        initialUnit : "gallons",
        targetUnit : "kelvin",
        studentResponse : 19.4
    
    
      })
      .end((err, res) => {
       res.should.have.status(200)
       res.body.should.be.an('object')
       res.body.should.include.keys('output')
       res.body.should.have.property('output').eql('invalid')
       done()
      })
    })
   })  


   describe('/POST convert - Invalid student response', () => {
    it('it should return 400 - invalid request', done => {
     chai
      .request(app)
      .post('/convert')
      .send({
       
        initialValue : 73.12,
        initialUnit : "Fahrenheit",
        targetUnit : "Rankine",
        studentResponse : "dog"
    
    
      })
      .end((err, res) => {
       res.should.have.status(400)
       res.body.should.be.an('object')
       res.body.should.include.keys('errorMessage')
       res.body.should.have.property('errorMessage').eql('Invalid Request!! initialValue and studentResponse needs to be number')
       done()
      })
    })
   })  

   describe('/POST convert - Invalid initialUnit', () => {
    it('it should return 400 - invalid request', done => {
     chai
      .request(app)
      .post('/convert')
      .send({
       
        initialValue : 136.1,
        initialUnit : "dog",
        targetUnit : "Celsius",
        studentResponse : 45.32
    
    
      })
      .end((err, res) => {
       res.should.have.status(400)
       res.body.should.be.an('object')
       res.body.should.include.keys('errorMessage')
       res.body.should.have.property('errorMessage').eql('Invalid Request!! initialUnit or targetUnit does not look correct;valid values are [tbsp,gallons,cups,cubic-inch,cubic-feet,celsius,kelvin,rankine,fahrenheit,liters]')
       done()
      })
    })
   })  