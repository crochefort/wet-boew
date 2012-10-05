/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1a1
 */
/*!
* Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
* wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
*/
(function(b){var a=window.pe||{fn:{}};a.fn.parsertable={onParserError:undefined,parse:function(n){var q=n,C=function(J,I){if(typeof a.fn.parsertable.onParserError==="function"){a.fn.parsertable.onParserError(J,I)}},H={allParserObj:[],nbDescriptionRow:0},A=[],i=[],g=0,B=0,D=0,s=[],x=0,w=false,F=false,E=[],l,k=[],m=false,j=[],f,e,t=[],G=false,d=b(q).has("tfoot"),v,h;if(b(n).get(0).nodeName.toLowerCase()!=="table"){C(1,n);return}if(b(q).tblparser){C(2,q);return}b(q).data().tblparser=H;H.colgroup=A;if(!H.rowgroup){H.rowgroup=[]}if(!H.lstrowgroup){H.lstrowgroup=t}H.elem=q;H.uid=g;g+=1;H.colcaption={};H.colcaption.uid=g;g+=1;H.colcaption.elem=undefined;H.colcaption.type=7;H.colcaption.dataset=[];H.colcaption.summaryset=[];H.rowcaption={};H.rowcaption.uid=g;g+=1;H.rowcaption.elem=undefined;H.rowcaption.type=7;H.rowcaption.dataset=[];H.rowcaption.summaryset=[];H.col=[];function r(L){H.colcaption.elem=L;H.rowcaption.elem=L;var I={colcaption:H.colcaption,rowcaption:H.rowcaption,elem:L},J,M,K=[];if(b(L).children().length>0){b(L).contents().filter(function(){if(!J&&this.nodeType===3){J=b(this).text().replace(/^\s+|\s+$/g,"");if(J.length!==0){J=this;M=true;return}J=false}else{if(!J&&this.nodeType===1){J=this;return}}});b(L).children().filter(function(){if(M){K.push(this)}else{M=true}})}else{J=L}if(K.length>1){I.description=b(K)}else{if(K.length===1){I.description=K[0]}}if(J){I.caption=J}I.groupZero=H;I.type=1;H.groupheadercell=I;b(L).data().tblparser=I}function z(P,M){var K={elem:{},start:0,end:0,col:[],groupZero:H},I=0,O,N,J,L;K.elem=P;if(P){b(P).data().tblparser=K}K.uid=g;g+=1;H.allParserObj.push(K);if(A.length!==0){K.start=A[A.length-1].end+1}else{K.start=1}if(P){b("col",P).each(function(){var S=b(this),R=S.attr("span")!==undefined?parseInt(S.attr("span"),10):1,Q={elem:{},start:0,end:0,groupZero:H};Q.uid=g;g+=1;H.allParserObj.push(Q);Q.start=K.start+I;Q.end=K.start+I+R-1;Q.elem=this;Q.groupZero=H;S.data().tblparser=Q;K.col.push(Q);i.push(Q);I+=R})}if(K.col.length===0){if(P){O=b(P).attr("span")!==undefined?parseInt(b(P).attr("span"),10):1}else{if(typeof M==="number"){O=M}else{C(31);return}}I+=O;for(N=K.start,J=(K.start+I);N<J;N+=1){L={start:0,end:0,groupZero:H,elem:undefined};L.uid=g;g+=1;H.allParserObj.push(L);L.start=N;L.end=N;K.col.push(L);i.push(L)}}K.end=K.start+I-1;A.push(K)}function o(W){var ac,J,ab,M,Z,Y,aa=[],af,L,U,S,T,O,ae,Q,I,ad,N,X,R,ag,K,P,V;if(H.colgrouphead||G){return}G=true;if(W&&W>0){if(A.length>0&&(A[0].start!==1||(A[0].end!==W&&A[0].end!==(W+1)))){C(3);A=[]}}else{W=0}for(ac=0,J=k.length;ac<J;ac+=1){V=k[ac];if(!V.type){V.type=1}for(ab=0,M=V.cell.length;ab<M;ab+=1){K=k[ac].cell[ab];K.scope="col";if(ac===0&&ab===0&&b(K.elem).html().length===0){K.type=6;if(!H.layoutCell){H.layoutCell=[]}H.layoutCell.push(K);ab=K.width-1;if(ab>=M){break}}R=k[ac+1];ag=(R?R.cell[ab]:"");if(!K.descCell&&K.elem.nodeName.toLowerCase()==="th"&&!K.type&&R&&R.uid!==K.uid&&ag&&!ag.type&&ag.elem.nodeName.toLowerCase()==="td"&&ag.width===K.width&&ag.height===1){R.type=5;ag.type=5;ag.row=V;K.descCell=ag;if(!H.desccell){H.desccell=[]}H.desccell.push(ag);ab=K.width-1;if(ab>=M){break}}if(!K.type){K.type=1}}}for(ac=0,J=k.length;ac<J;ac+=1){V=k[ac];if(V.type===5){for(ab=0,M=V.cell.length;ab<M;ab+=1){K=V.cell[ab];if(K.type!==5&&K.type!==6&&K.height===1){C(4,K.elem)}if(K.uid===k[ac-1].cell[ab].uid){K.height-=1}}H.nbDescriptionRow+=1}else{aa.push(V)}}H.colgrp=[];if(W>0&&(A.length===1||A.length===0)){U={};S=[];T={start:(W+1),end:x,col:[],groupZero:H,elem:undefined,type:2};T.uid=g;g+=1;H.allParserObj.push(T);if(T.start>T.end){C(5)}U=T;for(ac=T.start,J=T.end;ac<=J;ac+=1){O={start:0,end:0,groupZero:H,elem:undefined};O.uid=g;g+=1;H.allParserObj.push(O);if(!H.col){H.col=[]}S.push(O);O.start=ac;O.end=ac;O.groupstruct=T;T.col.push(O);i.push(O)}H.colgrp[1]=[];H.colgrp[1].push(H.colcaption);if(W>0){ae={start:1,elem:undefined,end:W,col:[],groupZero:H,type:1};ae.uid=g;g+=1;H.allParserObj.push(ae);A.push(ae);A.push(U);H.colcaption.dataset=U.col;for(ac=ae.start,J=ae.end;ac<=J;ac+=1){O={start:0,end:0,groupZero:H,elem:undefined};O.uid=g;g+=1;H.allParserObj.push(O);if(!H.col){H.col=[]}H.col.push(O);O.start=ac;O.end=ac;O.groupstruct=ae;ae.col.push(O);i.push(O)}for(ac=0,J=S.length;ac<J;ac+=1){H.col.push(S[ac])}}if(A.length===0){A.push(U);H.colcaption.dataset=U.col}for(ac=0,J=H.col.length;ac<J;ac+=1){P=H.col[ac];P.header=[];for(ab=0,M=aa.length;ab<M;ab+=1){for(Z=P.start,Y=P.end;Z<=Y;Z+=1){if((ab===0||(ab>0&&aa[ab].cell[Z-1].uid!==aa[ab-1].cell[Z-1].uid))&&aa[ab].cell[Z-1].type===1){P.header.push(aa[ab].cell[Z-1])}}}}}else{Q=[];I=(W===0?1:A[0].end+1);T={start:I,end:undefined,col:[],row:[],type:2};ad=[];N=0;X=false;b.each(A,function(){var ai=this,ak,ah,aj,al;N+=1;if(X||H.colgrp[0]){C(6,ai);return}b.each(ai.col,function(){var am=this;if(!H.col){H.col=[]}H.col.push(am);am.type=1;am.groupstruct=ai});if(ai.start<I){if(W!==ai.end){C(7,ai)}for(ac=0,J=ai.col.length;ac<J;ac+=1){P=ai.col[ac];P.header=[];for(ab=0,M=aa.length;ab<M;ab+=1){for(Z=P.start,Y=P.end;Z<=Y;Z+=1){if((ab===0||(ab>0&&aa[ab].cell[Z-1].uid!==aa[ab-1].cell[Z-1].uid))&&aa[ab].cell[Z-1].type===1){P.header.push(aa[ab].cell[Z-1])}}}}return}ak=undefined;for(ac=0,J=aa.length;ac<J;ac+=1){L=aa[ac].cell[ai.end-1];if(!L&&ai.end>aa[ac].cell.length){C(7);break}if((L.colpos+L.width-1)===ai.end&&(L.colpos>=ai.start)){if(!ak||ak>(ac+1)){ak=(ac+1)}}}if(!ak){ak=1}for(ac=(ak-1),J=aa.length;ac<J;ac+=1){af=aa[ac];for(ab=ai.start-1,M=ai.end;ab<M;ab+=1){L=af.cell[ab];if(L.colpos<ai.start||(L.colpos+L.width-1)>ai.end){C(9);return}}}for(ac=ad.length,J=(ak-1);ac<J;ac+=1){L=aa[ac].cell[ai.start-1];if(L.uid!==aa[ac].cell[ai.end-1].uid||L.colpos>ai.start||L.colpos+L.width-1<ai.end){C(10);return}ah=L;ah.level=(ac+1);ah.start=ah.colpos;ah.end=ah.colpos+ah.width-1;ah.type=7;ad.push(ah);if(!H.virtualColgroup){H.virtualColgroup=[]}H.virtualColgroup.push(ah);if(!H.colgrp[(ac+1)]){H.colgrp[(ac+1)]=[]}H.colgrp[(ac+1)].push(ah)}ai.header=[];for(ac=ak-(ak>=2?2:1);ac<aa.length;ac+=1){for(ab=ai.start;ab<=ai.end;ab+=1){if(aa[ac].cell[ab-1].rowpos===ac+1){ai.header.push(aa[ac].cell[ab-1]);aa[ac].cell[ab-1].colgroup=ai}ab+=aa[ac].cell[ab-1].width-1}}aj=[];for(ac=0;ac<ad.length-1;ac+=1){aj.push(ad[ac])}ai.parentHeader=aj;if(ad.length<ak){if(!ai.type){ai.type=2;ai.level=ak}ad.push(ai);if(!H.colgrp[ak]){H.colgrp[ak]=[]}H.colgrp[ak].push(ai)}al=false;for(ac=ad.length-1;ac>=0;ac-=1){if(ad[ac].end<=ai.end){if(ad[ac].level<ak&&k.length>0){ai.type=3}if(ai.type===3&&!al){ad[ad.length-1].summary=ai;al=true}ad.pop()}}if(ak===1&&H.colgrp[1]&&H.colgrp[1].length>1&&k.length>0){for(ac=0;ac<H.colgrp[1].length;ac+=1){if(H.colgrp[1][ac].type===3){ai.level=0;if(!H.colgrp[0]){H.colgrp[0]=[]}H.colgrp[0].push(ai);H.colgrp[1].pop();X=true;break}}ai.type=3}if(ai.level===1&&ai.type===2){ai.repheader="caption"}if(!H.col){H.col=[]}b.each(ai.col,function(){var am=this;am.type=ai.type;am.level=ai.level;am.groupstruct=ai;am.header=[];for(ab=(ak-1);ab<aa.length;ab+=1){for(ac=(ai.start-1);ac<ai.end;ac+=1){if((aa[ab].cell[ac].colpos>=am.start&&aa[ab].cell[ac].colpos<=am.end)||(aa[ab].cell[ac].colpos<=am.start&&(aa[ab].cell[ac].colpos+aa[ab].cell[ac].width-1)>=am.end)||((aa[ab].cell[ac].colpos+aa[ab].cell[ac].width-1)<=am.start&&(aa[ab].cell[ac].colpos+aa[ab].cell[ac].width-1)>=am.end)){if(am.header.length===0||(am.header.length>0&&am.header[am.header.length-1].uid!==aa[ab].cell[ac].uid)){am.header.push(aa[ab].cell[ac]);aa[ab].cell[ac].level=ai.level}}}}})});if(!H.virtualColgroup){H.virtualColgroup=[]}b.each(H.virtualColgroup,function(){var ah=this;for(ac=(ah.start-1);ac<ah.end;ac+=1){if(!H.col[ac].headerLevel){H.col[ac].headerLevel=[]}H.col[ac].headerLevel.push(ah)}})}if(A.length>0&&W>0){H.colgrouphead=A[0];H.colgrouphead.type=1}}function c(){if(!f.type||!f.level){p()}t.push(f);f={}}function u(){if(f&&f.type){c()}f={};f.elem=e;f.row=[];f.headerlevel=[];f.groupZero=H;f.uid=g;g+=1}function p(K){var J,I,L;if(j.length>0){if(f&&f.type&&f.row.length>0){e={};u()}f.type=2;f.row=j;for(J=0;J<j.length;J+=1){j[J].cell[0].type=7;j[J].cell[0].scope="row";j[J].cell[0].row=j[J];f.headerlevel.push(j[J].cell[0])}}if(j.length===0&&t.length===0){if(f.type&&f.type===1){e={};u()}f.type=2;f.level=1}if(j.length===0&&t.length>0&&!f.type&&A[0]&&(A[0].type===1||(!A[0].type&&A.length>0))&&!K){f.type=3}else{f.type=2}if(!f.level){if(t.length>0){I=t[t.length-1];if(f.type===2){if(f.headerlevel.length===I.headerlevel.length){f.level=I.level}else{if(f.headerlevel.length<I.headerlevel.length){L=f.headerlevel;f.headerlevel=[];for(J=0;J<(I.headerlevel.length-f.headerlevel.length);J+=1){f.headerlevel.push(I.headerlevel[J])}for(J=0;J<L.length;J+=1){f.headerlevel.push(L[J])}f.level=I.level}else{if(f.headerlevel.length>I.headerlevel.length){f.level=f.headerlevel.length+1}}}}else{if(f.type===3){if(I.type===3){f.level=I.level-1}else{f.level=I.level}if(f.level<0){C(12)}for(J=0;J<I.headerlevel.length;J+=1){if(I.headerlevel[J].level<f.level){f.headerlevel.push(I.headerlevel[J])}}}else{f.level="Error, not calculated";C(13)}}}else{f.level=1+j.length}}for(J=0;J<f.headerlevel.length;J+=1){f.headerlevel[J].level=J+1;f.headerlevel[J].rowlevel=f.headerlevel[J].level}j=[];if(f.level===undefined||f.level<0){C(14,f.elem)}}function y(X){D+=1;var R=1,M="",Y=false,I=b(X).children(),K={colgroup:[],cell:[],elem:X,rowpos:D},P,J,Q,W,Z,L,V,T,S,N,O,U;b(X).data().tblparser=K;K.uid=g;g+=1;K.groupZero=H;H.allParserObj.push(K);P={cell:[],cgsummary:undefined,type:false};P.uid=g;g+=1;H.allParserObj.push(P);J=function(aa){if(!P.type){P.type=1}if(P.type!==1){K.colgroup.push(P);P={cell:[],type:1};P.uid=g;g+=1;H.allParserObj.push(P)}P.cell.push(aa);Y=aa.colpos+aa.width-1};Q=function(aa){if(!P.type){P.type=2}if(P.type!==2){K.colgroup.push(P);P={cell:[],type:2};P.uid=g;g+=1;H.allParserObj.push(P)}P.cell.push(aa)};W=function(){var aa;b.each(s,function(){if(this.colpos===R&&this.spanHeight>0&&(this.height+this.rowpos-this.spanHeight===D)){if(this.elem.nodeName.toLowerCase()==="th"){J(this)}if(this.elem.nodeName.toLowerCase()==="td"){Q(this)}this.spanHeight-=1;R+=this.width;for(aa=1;aa<=this.width;aa+=1){K.cell.push(this)}M=this.elem.nodeName.toLowerCase()}})};W();b.each(I,function(){var af=b(this),ac=af.attr("colspan")!==undefined?parseInt(af.attr("colspan"),10):1,aa=af.attr("rowspan")!==undefined?parseInt(af.attr("rowspan"),10):1,ad,ae,ab;switch(this.nodeName.toLowerCase()){case"th":ad={rowpos:D,colpos:R,width:ac,height:aa,data:[],summary:[],elem:this};af.data().tblparser=ad;ad.groupZero=H;ad.uid=g;g+=1;H.allParserObj.push(ad);J(ad);ad.parent=P;if(aa>1){ad.spanHeight=aa-1;s.push(ad)}R+=ad.width;for(ab=1;ab<=ac;ab+=1){K.cell.push(ad)}W();break;case"td":ae={rowpos:D,colpos:R,width:ac,height:aa,elem:this};af.data().tblparser=ae;ae.groupZero=H;ae.uid=g;g+=1;H.allParserObj.push(ae);Q(ae);ae.parent=P;if(aa>1){ae.spanHeight=aa-1;s.push(ae)}R+=ae.width;for(ab=1;ab<=ac;ab+=1){K.cell.push(ae)}W();break;default:C(15,this);break}M=this.nodeName.toLowerCase()});W();if(x===0){x=K.cell.length}if(x!==K.cell.length){K.spannedRow=s;C(16,K.elem)}if(m){k.push(K);return}K.colgroup.push(P);if(M==="th"){K.type=1;if(K.colgroup.length===2&&D===1){if(K.colgroup[0].type===2&&K.colgroup[0].cell.length===1){if(b(K.colgroup[0].cell[0].elem).html().length===0){k.push(K);return}C(17)}else{C(18)}}if(K.colgroup.length===1){if(K.colgroup[0].cell.length>1){if(!w){k.push(K);return}C(18)}else{if(D!==1||K.cell[0].uid===K.cell[K.cell.length-1].uid){j.push(K);w=true;return}C(18)}}if(K.colgroup.length>1&&D!==1){C(21)}}else{K.type=2;w=true;if(j.length>0&&K.cell[0].uid===K.cell[K.cell.length-1].uid){K.type=5;K.cell[0].type=5;K.cell[0].row=K;if(!K.cell[0].describe){K.cell[0].describe=[]}j[j.length-1].cell[0].descCell=K.cell[0];K.cell[0].describe.push(j[j.length-1].cell[0]);if(!H.desccell){H.desccell=[]}H.desccell.push(K.cell[0]);return}if(j.length>0||!f.type){p()}K.type=f.type;K.level=f.level;if(A[0]&&Y&&A[0].end!==Y&&A[0].end===(Y+1)){Y+=1}K.lastHeadingColPos=Y;if(!f.lastHeadingColPos){f.lastHeadingColPos=Y}if(!h){h=Y}K.rowgroup=f;if(f.lastHeadingColPos!==Y){if((!v&&f.lastHeadingColPos<Y)||(v&&v===Y)){b.each(s,function(){if(this.spanHeight>0){C(29,this)}});s=[];j=[];E=[];l+=1;c();e=undefined;u();p();K.type=f.type}else{if(v&&h===Y){b.each(s,function(){if(this.spanHeight>0){C(29,this)}});s=[];j=[];E=[];l+=1;c();e=undefined;u();p(true);K.type=f.type;C(34,K.elem)}else{C(32)}}}if(!f.lastHeadingColPos){f.lastHeadingColPos=Y}if(f.type===3&&!v){v=Y}if(Y){Z=[];L=undefined;V=[];for(T=0;T<Y;T+=1){if(K.cell[T].elem.nodeName.toLowerCase()==="td"){if(!K.cell[T].type&&K.cell[T-1]&&!(K.cell[T-1].descCell)&&K.cell[T-1].type===1&&K.cell[T-1].height===K.cell[T].height){K.cell[T].type=5;K.cell[T-1].descCell=K.cell[T];if(!K.cell[T].describe){K.cell[T].describe=[]}K.cell[T].describe.push(K.cell[T-1]);if(!K.desccell){K.desccell=[]}K.desccell.push(K.cell[T]);if(!H.desccell){H.desccell=[]}H.desccell.push(K.cell[T]);K.cell[T].scope="row"}if(!K.cell[T].type){V.push(K.cell[T])}}if(K.cell[T].elem.nodeName.toLowerCase()==="th"){K.cell[T].type=1;K.cell[T].scope="row";if(L&&L.uid!==K.cell[T].uid){if(L.height>=K.cell[T].height){if(L.height===K.cell[T].height){C(23)}if(!L.subheader){L.subheader=[];L.isgroup=true}L.subheader.push(K.cell[T]);L=K.cell[T];Z.push(K.cell[T])}else{C(24)}}if(!L){L=K.cell[T];Z.push(K.cell[T])}for(S=0;S<V.length;S+=1){if(!(V[S].type)&&!(K.cell[T].keycell)&&V[S].height===K.cell[T].height){V[S].type=4;K.cell[T].keycell=V[S];if(!K.keycell){K.keycell=[]}K.keycell.push(V[S]);if(!H.keycell){H.keycell=[]}H.keycell.push(V[S]);if(!V[S].describe){V[S].describe=[]}V[S].describe.push(K.cell[T])}}}}b.each(V,function(){if(!(this.type)){C(25);if(!K.errorcell){K.errorcell=[]}K.errorcell.push(this)}});K.header=Z}else{Y=0;if(A.length===0){z(undefined,x)}}o(Y);K.headerset=(f.headerlevel||[]);if(Y!==0){Y=A[0].end}if(!K.datacell){K.datacell=[]}for(T=Y;T<K.cell.length;T+=1){N=true;O=true;for(S=(Y===0?0:1);S<A.length;S+=1){if(A[S].start<=K.cell[T].colpos&&K.cell[T].colpos<=A[S].end){if(K.type===3||A[S].type===3){K.cell[T].type=3}else{K.cell[T].type=2}if(K.type===3&&A[S].type===3&&(b(K.cell[T].elem).text().length===0)){K.cell[T].type=6;if(!H.layoutCell){H.layoutCell=[]}H.layoutCell.push(K.cell[T])}K.cell[T].collevel=A[S].level;K.datacell.push(K.cell[T])}O=!O}if(A.length===0){K.cell[T].type=2;K.datacell.push(K.cell[T])}if(K.cell[T].rowpos<D){if(!K.cell[T].addrowheaders){K.cell[T].addrowheaders=[]}if(K.header){for(S=0;S<K.header.length;S+=1){if((K.header[S].rowpos===D&&K.cell[T].addrowheaders.length===0)||(K.header[S].rowpos===D&&K.cell[T].addrowheaders[K.cell[T].addrowheaders.length-1].uid!==K.header[S].uid)){K.cell[T].addrowheaders.push(K.header[S])}}}}}U=(A.length===0);if(A.length===0){U=false}if(!H.col){H.col=[]}for(T=0;T<H.col.length;T+=1){for(S=(H.col[T].start-1);S<H.col[T].end;S+=1){if(!H.col[T].cell){H.col[T].cell=[]}if(!(S>(H.col[T].start-1)&&H.col[T].cell[H.col[T].cell.length-1].uid===K.cell[S].uid)){H.col[T].cell.push(K.cell[S]);if(!K.cell[S].col){K.cell[S].col=H.col[T]}}}}for(T=0;T<K.cell.length;T+=1){if(!K.cell[T].row){K.cell[T].row=K}K.cell[T].rowlevel=f.level;K.cell[T].rowlevelheader=f.headerlevel;K.cell[T].rowgroup=f;if(T>0&&K.cell[T-1].uid===K.cell[T].uid&&K.cell[T].type!==1&&K.cell[T].type!==5&&K.cell[T].rowpos===D&&K.cell[T].colpos<=T){if(!K.cell[T].addcolheaders){K.cell[T].addcolheaders=[]}if(H.col[T]&&H.col[T].header){for(S=0;S<H.col[T].header.length;S+=1){if(H.col[T].header[S].colpos===(T+1)){K.cell[T].addcolheaders.push(H.col[T].header[S])}}}}}F=true}B+=1;if(!H.row){H.row=[]}H.row.push(K);f.row.push(K);delete K.colgroup}if(d){b("tfoot",q).appendTo(b("tbody:last",q).parent())}b(q).children().each(function(){var I=b(this);switch(this.nodeName.toLowerCase()){case"caption":r(this);break;case"colgroup":z(this);break;case"thead":e=this;if(k.length!==0||(H.row&&H.row.length>0)){C(26,this)}b(this).data("tblparser",H);m=true;b(this).children().each(function(){if(this.nodeName.toLowerCase()!=="tr"){C(27,this)}y(this)});m=false;break;case"tbody":case"tfoot":e=this;u();I.data().tblparser=f;I.children().each(function(){if(this.nodeName.toLowerCase()!=="tr"){C(27,this);return}y(this)});c();b.each(s,function(){if(this.spanHeight>0){C(29,this)}});s=[];j=[];E=[];l+=1;break;case"tr":y(this);break;default:C(30,this);break}});H.theadRowStack=k;delete H.colgroupFrame;H.colgrouplevel=H.colgrp;delete H.colgrp}};window.pe=a;return a}(jQuery));