// Generated by LiveScript 1.2.0
(function(){
  var VERSION, Cache, parse, ref$, finalMatches, matchAst, queryParsed, query;
  VERSION = '0.1.0';
  Cache = require('./common').Cache;
  parse = require('./parse').parse;
  ref$ = require('./match'), finalMatches = ref$.finalMatches, matchAst = ref$.matchAst;
  queryParsed = function(parsedSelector, ast, cache){
    return finalMatches(matchAst(ast, parsedSelector, cache || new Cache(ast)));
  };
  query = function(selector, ast, cache){
    return queryParsed(parse(selector), ast, cache);
  };
  module.exports = {
    parse: parse,
    queryParsed: queryParsed,
    query: query,
    Cache: Cache,
    VERSION: VERSION
  };
}).call(this);