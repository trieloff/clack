// Compiled by ClojureScript 1.8.51 {:optimize-constants true, :target :nodejs}
goog.provide('cljs.tagged_literals');
goog.require('cljs.core');
goog.require('cljs.reader');
cljs.tagged_literals.read_queue = (function cljs$tagged_literals$read_queue(form){
if(cljs.core.vector_QMARK_.call(null,form)){
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__7044__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})(),cljs.core.cst$sym$cljs$core$PersistentQueue$EMPTY),cljs.core.cst$sym$cljs$core_SLASH_into);
});
cljs.tagged_literals.read_uuid = (function cljs$tagged_literals$read_uuid(form){
if(typeof form === 'string'){
} else {
throw (new Error("UUID literal expects a string as its representation."));
}

try{return cljs.core.uuid.call(null,form);
}catch (e7789){var e = e7789;
throw (new Error(e.message));
}});
cljs.tagged_literals.read_inst = (function cljs$tagged_literals$read_inst(form){
if(typeof form === 'string'){
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}

try{return cljs.reader.read_date.call(null,form);
}catch (e7791){var e = e7791;
throw (new Error(e.message));
}});
cljs.tagged_literals.valid_js_literal_key_QMARK_ = (function cljs$tagged_literals$valid_js_literal_key_QMARK_(k){
return (typeof k === 'string') || (((k instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,k) == null)));
});

/**
* @constructor
*/
cljs.tagged_literals.JSValue = (function (val){
this.val = val;
})

cljs.tagged_literals.JSValue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
});

cljs.tagged_literals.JSValue.cljs$lang$type = true;

cljs.tagged_literals.JSValue.cljs$lang$ctorStr = "cljs.tagged-literals/JSValue";

cljs.tagged_literals.JSValue.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.tagged-literals/JSValue");
});

cljs.tagged_literals.__GT_JSValue = (function cljs$tagged_literals$__GT_JSValue(val){
return (new cljs.tagged_literals.JSValue(val));
});

cljs.tagged_literals.read_js = (function cljs$tagged_literals$read_js(form){
if((cljs.core.vector_QMARK_.call(null,form)) || (cljs.core.map_QMARK_.call(null,form))){
} else {
throw (new Error("JavaScript literal must use map or vector notation"));
}

if((!(cljs.core.map_QMARK_.call(null,form))) || (cljs.core.every_QMARK_.call(null,cljs.tagged_literals.valid_js_literal_key_QMARK_,cljs.core.keys.call(null,form)))){
} else {
throw (new Error("JavaScript literal keys must be strings or unqualified keywords"));
}

return (new cljs.tagged_literals.JSValue(form));
});
cljs.tagged_literals._STAR_cljs_data_readers_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$queue,cljs.tagged_literals.read_queue,cljs.core.cst$sym$uuid,cljs.tagged_literals.read_uuid,cljs.core.cst$sym$inst,cljs.tagged_literals.read_inst,cljs.core.cst$sym$js,cljs.tagged_literals.read_js], null);

//# sourceMappingURL=tagged_literals.js.map