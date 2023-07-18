/* 

  Dentity - A Lightweight Decoder and Encoder for HTML Entities
  Copyright (C) 2023 Arash Kazemi <contact.arash.kazemi@gmail.com>
  
  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

'use strict';


class Dentity {

	static entity_labels = "AElig|AElig;AMP|AMP;Aacute|Aacute;Abreve;Acirc|Acirc;Acy;Afr;Agrave|Agrave;Alpha;Amacr;And;Aogon;Aopf;ApplyFunction;Aring|Aring;Ascr;Assign;Atilde|Atilde;Auml|Auml;Backslash;Barv;Barwed;Bcy;Because;Bernoullis;Beta;Bfr;Bopf;Breve;Bscr;Bumpeq;CHcy;COPY|COPY;Cacute;Cap;CapitalDifferentialD;Cayleys;Ccaron;Ccedil|Ccedil;Ccirc;Cconint;Cdot;Cedilla;CenterDot;Cfr;Chi;CircleDot;CircleMinus;CirclePlus;CircleTimes;ClockwiseContourIntegral;CloseCurlyDoubleQuote;CloseCurlyQuote;Colon;Colone;Congruent;Conint;ContourIntegral;Copf;Coproduct;CounterClockwiseContourIntegral;Cross;Cscr;Cup;CupCap;DD;DDotrahd;DJcy;DScy;DZcy;Dagger;Darr;Dashv;Dcaron;Dcy;Del;Delta;Dfr;DiacriticalAcute;DiacriticalDot;DiacriticalDoubleAcute;DiacriticalGrave;DiacriticalTilde;Diamond;DifferentialD;Dopf;Dot;DotDot;DotEqual;DoubleContourIntegral;DoubleDot;DoubleDownArrow;DoubleLeftArrow;DoubleLeftRightArrow;DoubleLeftTee;DoubleLongLeftArrow;DoubleLongLeftRightArrow;DoubleLongRightArrow;DoubleRightArrow;DoubleRightTee;DoubleUpArrow;DoubleUpDownArrow;DoubleVerticalBar;DownArrow;DownArrowBar;DownArrowUpArrow;DownBreve;DownLeftRightVector;DownLeftTeeVector;DownLeftVector;DownLeftVectorBar;DownRightTeeVector;DownRightVector;DownRightVectorBar;DownTee;DownTeeArrow;Downarrow;Dscr;Dstrok;ENG;ETH|ETH;Eacute|Eacute;Ecaron;Ecirc|Ecirc;Ecy;Edot;Efr;Egrave|Egrave;Element;Emacr;EmptySmallSquare;EmptyVerySmallSquare;Eogon;Eopf;Epsilon;Equal;EqualTilde;Equilibrium;Escr;Esim;Eta;Euml|Euml;Exists;ExponentialE;Fcy;Ffr;FilledSmallSquare;FilledVerySmallSquare;Fopf;ForAll;Fouriertrf;Fscr;GJcy;GT|GT;Gamma;Gammad;Gbreve;Gcedil;Gcirc;Gcy;Gdot;Gfr;Gg;Gopf;GreaterEqual;GreaterEqualLess;GreaterFullEqual;GreaterGreater;GreaterLess;GreaterSlantEqual;GreaterTilde;Gscr;Gt;HARDcy;Hacek;Hat;Hcirc;Hfr;HilbertSpace;Hopf;HorizontalLine;Hscr;Hstrok;HumpDownHump;HumpEqual;IEcy;IJlig;IOcy;Iacute|Iacute;Icirc|Icirc;Icy;Idot;Ifr;Igrave|Igrave;Im;Imacr;ImaginaryI;Implies;Int;Integral;Intersection;InvisibleComma;InvisibleTimes;Iogon;Iopf;Iota;Iscr;Itilde;Iukcy;Iuml|Iuml;Jcirc;Jcy;Jfr;Jopf;Jscr;Jsercy;Jukcy;KHcy;KJcy;Kappa;Kcedil;Kcy;Kfr;Kopf;Kscr;LJcy;LT|LT;Lacute;Lambda;Lang;Laplacetrf;Larr;Lcaron;Lcedil;Lcy;LeftAngleBracket;LeftArrow;LeftArrowBar;LeftArrowRightArrow;LeftCeiling;LeftDoubleBracket;LeftDownTeeVector;LeftDownVector;LeftDownVectorBar;LeftFloor;LeftRightArrow;LeftRightVector;LeftTee;LeftTeeArrow;LeftTeeVector;LeftTriangle;LeftTriangleBar;LeftTriangleEqual;LeftUpDownVector;LeftUpTeeVector;LeftUpVector;LeftUpVectorBar;LeftVector;LeftVectorBar;Leftarrow;Leftrightarrow;LessEqualGreater;LessFullEqual;LessGreater;LessLess;LessSlantEqual;LessTilde;Lfr;Ll;Lleftarrow;Lmidot;LongLeftArrow;LongLeftRightArrow;LongRightArrow;Longleftarrow;Longleftrightarrow;Longrightarrow;Lopf;LowerLeftArrow;LowerRightArrow;Lscr;Lsh;Lstrok;Lt;Map;Mcy;MediumSpace;Mellintrf;Mfr;MinusPlus;Mopf;Mscr;Mu;NJcy;Nacute;Ncaron;Ncedil;Ncy;NegativeMediumSpace;NegativeThickSpace;NegativeThinSpace;NegativeVeryThinSpace;NestedGreaterGreater;NestedLessLess;NewLine;Nfr;NoBreak;NonBreakingSpace;Nopf;Not;NotCongruent;NotCupCap;NotDoubleVerticalBar;NotElement;NotEqual;NotEqualTilde;NotExists;NotGreater;NotGreaterEqual;NotGreaterFullEqual;NotGreaterGreater;NotGreaterLess;NotGreaterSlantEqual;NotGreaterTilde;NotHumpDownHump;NotHumpEqual;NotLeftTriangle;NotLeftTriangleBar;NotLeftTriangleEqual;NotLess;NotLessEqual;NotLessGreater;NotLessLess;NotLessSlantEqual;NotLessTilde;NotNestedGreaterGreater;NotNestedLessLess;NotPrecedes;NotPrecedesEqual;NotPrecedesSlantEqual;NotReverseElement;NotRightTriangle;NotRightTriangleBar;NotRightTriangleEqual;NotSquareSubset;NotSquareSubsetEqual;NotSquareSuperset;NotSquareSupersetEqual;NotSubset;NotSubsetEqual;NotSucceeds;NotSucceedsEqual;NotSucceedsSlantEqual;NotSucceedsTilde;NotSuperset;NotSupersetEqual;NotTilde;NotTildeEqual;NotTildeFullEqual;NotTildeTilde;NotVerticalBar;Nscr;Ntilde|Ntilde;Nu;OElig;Oacute|Oacute;Ocirc|Ocirc;Ocy;Odblac;Ofr;Ograve|Ograve;Omacr;Omega;Omicron;Oopf;OpenCurlyDoubleQuote;OpenCurlyQuote;Or;Oscr;Oslash|Oslash;Otilde|Otilde;Otimes;Ouml|Ouml;OverBar;OverBrace;OverBracket;OverParenthesis;PartialD;Pcy;Pfr;Phi;Pi;PlusMinus;Poincareplane;Popf;Pr;Precedes;PrecedesEqual;PrecedesSlantEqual;PrecedesTilde;Prime;Product;Proportion;Proportional;Pscr;Psi;QUOT|QUOT;Qfr;Qopf;Qscr;RBarr;REG|REG;Racute;Rang;Rarr;Rarrtl;Rcaron;Rcedil;Rcy;Re;ReverseElement;ReverseEquilibrium;ReverseUpEquilibrium;Rfr;Rho;RightAngleBracket;RightArrow;RightArrowBar;RightArrowLeftArrow;RightCeiling;RightDoubleBracket;RightDownTeeVector;RightDownVector;RightDownVectorBar;RightFloor;RightTee;RightTeeArrow;RightTeeVector;RightTriangle;RightTriangleBar;RightTriangleEqual;RightUpDownVector;RightUpTeeVector;RightUpVector;RightUpVectorBar;RightVector;RightVectorBar;Rightarrow;Ropf;RoundImplies;Rrightarrow;Rscr;Rsh;RuleDelayed;SHCHcy;SHcy;SOFTcy;Sacute;Sc;Scaron;Scedil;Scirc;Scy;Sfr;ShortDownArrow;ShortLeftArrow;ShortRightArrow;ShortUpArrow;Sigma;SmallCircle;Sopf;Sqrt;Square;SquareIntersection;SquareSubset;SquareSubsetEqual;SquareSuperset;SquareSupersetEqual;SquareUnion;Sscr;Star;Sub;Subset;SubsetEqual;Succeeds;SucceedsEqual;SucceedsSlantEqual;SucceedsTilde;SuchThat;Sum;Sup;Superset;SupersetEqual;Supset;THORN|THORN;TRADE;TSHcy;TScy;Tab;Tau;Tcaron;Tcedil;Tcy;Tfr;Therefore;Theta;ThickSpace;ThinSpace;Tilde;TildeEqual;TildeFullEqual;TildeTilde;Topf;TripleDot;Tscr;Tstrok;Uacute|Uacute;Uarr;Uarrocir;Ubrcy;Ubreve;Ucirc|Ucirc;Ucy;Udblac;Ufr;Ugrave|Ugrave;Umacr;UnderBar;UnderBrace;UnderBracket;UnderParenthesis;Union;UnionPlus;Uogon;Uopf;UpArrow;UpArrowBar;UpArrowDownArrow;UpDownArrow;UpEquilibrium;UpTee;UpTeeArrow;Uparrow;Updownarrow;UpperLeftArrow;UpperRightArrow;Upsi;Upsilon;Uring;Uscr;Utilde;Uuml|Uuml;VDash;Vbar;Vcy;Vdash;Vdashl;Vee;Verbar;Vert;VerticalBar;VerticalLine;VerticalSeparator;VerticalTilde;VeryThinSpace;Vfr;Vopf;Vscr;Vvdash;Wcirc;Wedge;Wfr;Wopf;Wscr;Xfr;Xi;Xopf;Xscr;YAcy;YIcy;YUcy;Yacute|Yacute;Ycirc;Ycy;Yfr;Yopf;Yscr;Yuml;ZHcy;Zacute;Zcaron;Zcy;Zdot;ZeroWidthSpace;Zeta;Zfr;Zopf;Zscr;aacute|aacute;abreve;ac;acE;acd;acirc|acirc;acute|acute;acy;aelig|aelig;af;afr;agrave|agrave;alefsym;aleph;alpha;amacr;amalg;amp|amp;and;andand;andd;andslope;andv;ang;ange;angle;angmsd;angmsdaa;angmsdab;angmsdac;angmsdad;angmsdae;angmsdaf;angmsdag;angmsdah;angrt;angrtvb;angrtvbd;angsph;angst;angzarr;aogon;aopf;ap;apE;apacir;ape;apid;apos;approx;approxeq;aring|aring;ascr;ast;asymp;asympeq;atilde|atilde;auml|auml;awconint;awint;bNot;backcong;backepsilon;backprime;backsim;backsimeq;barvee;barwed;barwedge;bbrk;bbrktbrk;bcong;bcy;bdquo;becaus;because;bemptyv;bepsi;bernou;beta;beth;between;bfr;bigcap;bigcirc;bigcup;bigodot;bigoplus;bigotimes;bigsqcup;bigstar;bigtriangledown;bigtriangleup;biguplus;bigvee;bigwedge;bkarow;blacklozenge;blacksquare;blacktriangle;blacktriangledown;blacktriangleleft;blacktriangleright;blank;blk12;blk14;blk34;block;bne;bnequiv;bnot;bopf;bot;bottom;bowtie;boxDL;boxDR;boxDl;boxDr;boxH;boxHD;boxHU;boxHd;boxHu;boxUL;boxUR;boxUl;boxUr;boxV;boxVH;boxVL;boxVR;boxVh;boxVl;boxVr;boxbox;boxdL;boxdR;boxdl;boxdr;boxh;boxhD;boxhU;boxhd;boxhu;boxminus;boxplus;boxtimes;boxuL;boxuR;boxul;boxur;boxv;boxvH;boxvL;boxvR;boxvh;boxvl;boxvr;bprime;breve;brvbar|brvbar;bscr;bsemi;bsim;bsime;bsol;bsolb;bsolhsub;bull;bullet;bump;bumpE;bumpe;bumpeq;cacute;cap;capand;capbrcup;capcap;capcup;capdot;caps;caret;caron;ccaps;ccaron;ccedil|ccedil;ccirc;ccups;ccupssm;cdot;cedil|cedil;cemptyv;cent|cent;centerdot;cfr;chcy;check;checkmark;chi;cir;cirE;circ;circeq;circlearrowleft;circlearrowright;circledR;circledS;circledast;circledcirc;circleddash;cire;cirfnint;cirmid;cirscir;clubs;clubsuit;colon;colone;coloneq;comma;commat;comp;compfn;complement;complexes;cong;congdot;conint;copf;coprod;copy|copy;copysr;crarr;cross;cscr;csub;csube;csup;csupe;ctdot;cudarrl;cudarrr;cuepr;cuesc;cularr;cularrp;cup;cupbrcap;cupcap;cupcup;cupdot;cupor;cups;curarr;curarrm;curlyeqprec;curlyeqsucc;curlyvee;curlywedge;curren|curren;curvearrowleft;curvearrowright;cuvee;cuwed;cwconint;cwint;cylcty;dArr;dHar;dagger;daleth;darr;dash;dashv;dbkarow;dblac;dcaron;dcy;dd;ddagger;ddarr;ddotseq;deg|deg;delta;demptyv;dfisht;dfr;dharl;dharr;diam;diamond;diamondsuit;diams;die;digamma;disin;div;divide|divide;divideontimes;divonx;djcy;dlcorn;dlcrop;dollar;dopf;dot;doteq;doteqdot;dotminus;dotplus;dotsquare;doublebarwedge;downarrow;downdownarrows;downharpoonleft;downharpoonright;drbkarow;drcorn;drcrop;dscr;dscy;dsol;dstrok;dtdot;dtri;dtrif;duarr;duhar;dwangle;dzcy;dzigrarr;eDDot;eDot;eacute|eacute;easter;ecaron;ecir;ecirc|ecirc;ecolon;ecy;edot;ee;efDot;efr;eg;egrave|egrave;egs;egsdot;el;elinters;ell;els;elsdot;emacr;empty;emptyset;emptyv;emsp13;emsp14;emsp;eng;ensp;eogon;eopf;epar;eparsl;eplus;epsi;epsilon;epsiv;eqcirc;eqcolon;eqsim;eqslantgtr;eqslantless;equals;equest;equiv;equivDD;eqvparsl;erDot;erarr;escr;esdot;esim;eta;eth|eth;euml|euml;euro;excl;exist;expectation;exponentiale;fallingdotseq;fcy;female;ffilig;fflig;ffllig;ffr;filig;fjlig;flat;fllig;fltns;fnof;fopf;forall;fork;forkv;fpartint;frac12|frac12;frac13;frac14|frac14;frac15;frac16;frac18;frac23;frac25;frac34|frac34;frac35;frac38;frac45;frac56;frac58;frac78;frasl;frown;fscr;gE;gEl;gacute;gamma;gammad;gap;gbreve;gcirc;gcy;gdot;ge;gel;geq;geqq;geqslant;ges;gescc;gesdot;gesdoto;gesdotol;gesl;gesles;gfr;gg;ggg;gimel;gjcy;gl;glE;gla;glj;gnE;gnap;gnapprox;gne;gneq;gneqq;gnsim;gopf;grave;gscr;gsim;gsime;gsiml;gt|gt;gtcc;gtcir;gtdot;gtlPar;gtquest;gtrapprox;gtrarr;gtrdot;gtreqless;gtreqqless;gtrless;gtrsim;gvertneqq;gvnE;hArr;hairsp;half;hamilt;hardcy;harr;harrcir;harrw;hbar;hcirc;hearts;heartsuit;hellip;hercon;hfr;hksearow;hkswarow;hoarr;homtht;hookleftarrow;hookrightarrow;hopf;horbar;hscr;hslash;hstrok;hybull;hyphen;iacute|iacute;ic;icirc|icirc;icy;iecy;iexcl|iexcl;iff;ifr;igrave|igrave;ii;iiiint;iiint;iinfin;iiota;ijlig;imacr;image;imagline;imagpart;imath;imof;imped;in;incare;infin;infintie;inodot;int;intcal;integers;intercal;intlarhk;intprod;iocy;iogon;iopf;iota;iprod;iquest|iquest;iscr;isin;isinE;isindot;isins;isinsv;isinv;it;itilde;iukcy;iuml|iuml;jcirc;jcy;jfr;jmath;jopf;jscr;jsercy;jukcy;kappa;kappav;kcedil;kcy;kfr;kgreen;khcy;kjcy;kopf;kscr;lAarr;lArr;lAtail;lBarr;lE;lEg;lHar;lacute;laemptyv;lagran;lambda;lang;langd;langle;lap;laquo|laquo;larr;larrb;larrbfs;larrfs;larrhk;larrlp;larrpl;larrsim;larrtl;lat;latail;late;lates;lbarr;lbbrk;lbrace;lbrack;lbrke;lbrksld;lbrkslu;lcaron;lcedil;lceil;lcub;lcy;ldca;ldquo;ldquor;ldrdhar;ldrushar;ldsh;le;leftarrow;leftarrowtail;leftharpoondown;leftharpoonup;leftleftarrows;leftrightarrow;leftrightarrows;leftrightharpoons;leftrightsquigarrow;leftthreetimes;leg;leq;leqq;leqslant;les;lescc;lesdot;lesdoto;lesdotor;lesg;lesges;lessapprox;lessdot;lesseqgtr;lesseqqgtr;lessgtr;lesssim;lfisht;lfloor;lfr;lg;lgE;lhard;lharu;lharul;lhblk;ljcy;ll;llarr;llcorner;llhard;lltri;lmidot;lmoust;lmoustache;lnE;lnap;lnapprox;lne;lneq;lneqq;lnsim;loang;loarr;lobrk;longleftarrow;longleftrightarrow;longmapsto;longrightarrow;looparrowleft;looparrowright;lopar;lopf;loplus;lotimes;lowast;lowbar;loz;lozenge;lozf;lpar;lparlt;lrarr;lrcorner;lrhar;lrhard;lrm;lrtri;lsaquo;lscr;lsh;lsim;lsime;lsimg;lsqb;lsquo;lsquor;lstrok;lt|lt;ltcc;ltcir;ltdot;lthree;ltimes;ltlarr;ltquest;ltrPar;ltri;ltrie;ltrif;lurdshar;luruhar;lvertneqq;lvnE;mDDot;macr|macr;male;malt;maltese;map;mapsto;mapstodown;mapstoleft;mapstoup;marker;mcomma;mcy;mdash;measuredangle;mfr;mho;micro|micro;mid;midast;midcir;middot|middot;minus;minusb;minusd;minusdu;mlcp;mldr;mnplus;models;mopf;mp;mscr;mstpos;mu;multimap;mumap;nGg;nGt;nGtv;nLeftarrow;nLeftrightarrow;nLl;nLt;nLtv;nRightarrow;nVDash;nVdash;nabla;nacute;nang;nap;napE;napid;napos;napprox;natur;natural;naturals;nbsp|nbsp;nbump;nbumpe;ncap;ncaron;ncedil;ncong;ncongdot;ncup;ncy;ndash;ne;neArr;nearhk;nearr;nearrow;nedot;nequiv;nesear;nesim;nexist;nexists;nfr;ngE;nge;ngeq;ngeqq;ngeqslant;nges;ngsim;ngt;ngtr;nhArr;nharr;nhpar;ni;nis;nisd;niv;njcy;nlArr;nlE;nlarr;nldr;nle;nleftarrow;nleftrightarrow;nleq;nleqq;nleqslant;nles;nless;nlsim;nlt;nltri;nltrie;nmid;nopf;not|not;notin;notinE;notindot;notinva;notinvb;notinvc;notni;notniva;notnivb;notnivc;npar;nparallel;nparsl;npart;npolint;npr;nprcue;npre;nprec;npreceq;nrArr;nrarr;nrarrc;nrarrw;nrightarrow;nrtri;nrtrie;nsc;nsccue;nsce;nscr;nshortmid;nshortparallel;nsim;nsime;nsimeq;nsmid;nspar;nsqsube;nsqsupe;nsub;nsubE;nsube;nsubset;nsubseteq;nsubseteqq;nsucc;nsucceq;nsup;nsupE;nsupe;nsupset;nsupseteq;nsupseteqq;ntgl;ntilde|ntilde;ntlg;ntriangleleft;ntrianglelefteq;ntriangleright;ntrianglerighteq;nu;num;numero;numsp;nvDash;nvHarr;nvap;nvdash;nvge;nvgt;nvinfin;nvlArr;nvle;nvlt;nvltrie;nvrArr;nvrtrie;nvsim;nwArr;nwarhk;nwarr;nwarrow;nwnear;oS;oacute|oacute;oast;ocir;ocirc|ocirc;ocy;odash;odblac;odiv;odot;odsold;oelig;ofcir;ofr;ogon;ograve|ograve;ogt;ohbar;ohm;oint;olarr;olcir;olcross;oline;olt;omacr;omega;omicron;omid;ominus;oopf;opar;operp;oplus;or;orarr;ord;order;orderof;ordf|ordf;ordm|ordm;origof;oror;orslope;orv;oscr;oslash|oslash;osol;otilde|otilde;otimes;otimesas;ouml|ouml;ovbar;par;para|para;parallel;parsim;parsl;part;pcy;percnt;period;permil;perp;pertenk;pfr;phi;phiv;phmmat;phone;pi;pitchfork;piv;planck;planckh;plankv;plus;plusacir;plusb;pluscir;plusdo;plusdu;pluse;plusmn|plusmn;plussim;plustwo;pm;pointint;popf;pound|pound;pr;prE;prap;prcue;pre;prec;precapprox;preccurlyeq;preceq;precnapprox;precneqq;precnsim;precsim;prime;primes;prnE;prnap;prnsim;prod;profalar;profline;profsurf;prop;propto;prsim;prurel;pscr;psi;puncsp;qfr;qint;qopf;qprime;qscr;quaternions;quatint;quest;questeq;quot|quot;rAarr;rArr;rAtail;rBarr;rHar;race;racute;radic;raemptyv;rang;rangd;range;rangle;raquo|raquo;rarr;rarrap;rarrb;rarrbfs;rarrc;rarrfs;rarrhk;rarrlp;rarrpl;rarrsim;rarrtl;rarrw;ratail;ratio;rationals;rbarr;rbbrk;rbrace;rbrack;rbrke;rbrksld;rbrkslu;rcaron;rcedil;rceil;rcub;rcy;rdca;rdldhar;rdquo;rdquor;rdsh;real;realine;realpart;reals;rect;reg|reg;rfisht;rfloor;rfr;rhard;rharu;rharul;rho;rhov;rightarrow;rightarrowtail;rightharpoondown;rightharpoonup;rightleftarrows;rightleftharpoons;rightrightarrows;rightsquigarrow;rightthreetimes;ring;risingdotseq;rlarr;rlhar;rlm;rmoust;rmoustache;rnmid;roang;roarr;robrk;ropar;ropf;roplus;rotimes;rpar;rpargt;rppolint;rrarr;rsaquo;rscr;rsh;rsqb;rsquo;rsquor;rthree;rtimes;rtri;rtrie;rtrif;rtriltri;ruluhar;rx;sacute;sbquo;sc;scE;scap;scaron;sccue;sce;scedil;scirc;scnE;scnap;scnsim;scpolint;scsim;scy;sdot;sdotb;sdote;seArr;searhk;searr;searrow;sect|sect;semi;seswar;setminus;setmn;sext;sfr;sfrown;sharp;shchcy;shcy;shortmid;shortparallel;shy|shy;sigma;sigmaf;sigmav;sim;simdot;sime;simeq;simg;simgE;siml;simlE;simne;simplus;simrarr;slarr;smallsetminus;smashp;smeparsl;smid;smile;smt;smte;smtes;softcy;sol;solb;solbar;sopf;spades;spadesuit;spar;sqcap;sqcaps;sqcup;sqcups;sqsub;sqsube;sqsubset;sqsubseteq;sqsup;sqsupe;sqsupset;sqsupseteq;squ;square;squarf;squf;srarr;sscr;ssetmn;ssmile;sstarf;star;starf;straightepsilon;straightphi;strns;sub;subE;subdot;sube;subedot;submult;subnE;subne;subplus;subrarr;subset;subseteq;subseteqq;subsetneq;subsetneqq;subsim;subsub;subsup;succ;succapprox;succcurlyeq;succeq;succnapprox;succneqq;succnsim;succsim;sum;sung;sup1|sup1;sup2|sup2;sup3|sup3;sup;supE;supdot;supdsub;supe;supedot;suphsol;suphsub;suplarr;supmult;supnE;supne;supplus;supset;supseteq;supseteqq;supsetneq;supsetneqq;supsim;supsub;supsup;swArr;swarhk;swarr;swarrow;swnwar;szlig|szlig;target;tau;tbrk;tcaron;tcedil;tcy;tdot;telrec;tfr;there4;therefore;theta;thetasym;thetav;thickapprox;thicksim;thinsp;thkap;thksim;thorn|thorn;tilde;times|times;timesb;timesbar;timesd;tint;toea;top;topbot;topcir;topf;topfork;tosa;tprime;trade;triangle;triangledown;triangleleft;trianglelefteq;triangleq;triangleright;trianglerighteq;tridot;trie;triminus;triplus;trisb;tritime;trpezium;tscr;tscy;tshcy;tstrok;twixt;twoheadleftarrow;twoheadrightarrow;uArr;uHar;uacute|uacute;uarr;ubrcy;ubreve;ucirc|ucirc;ucy;udarr;udblac;udhar;ufisht;ufr;ugrave|ugrave;uharl;uharr;uhblk;ulcorn;ulcorner;ulcrop;ultri;umacr;uml|uml;uogon;uopf;uparrow;updownarrow;upharpoonleft;upharpoonright;uplus;upsi;upsih;upsilon;upuparrows;urcorn;urcorner;urcrop;uring;urtri;uscr;utdot;utilde;utri;utrif;uuarr;uuml|uuml;uwangle;vArr;vBar;vBarv;vDash;vangrt;varepsilon;varkappa;varnothing;varphi;varpi;varpropto;varr;varrho;varsigma;varsubsetneq;varsubsetneqq;varsupsetneq;varsupsetneqq;vartheta;vartriangleleft;vartriangleright;vcy;vdash;vee;veebar;veeeq;vellip;verbar;vert;vfr;vltri;vnsub;vnsup;vopf;vprop;vrtri;vscr;vsubnE;vsubne;vsupnE;vsupne;vzigzag;wcirc;wedbar;wedge;wedgeq;weierp;wfr;wopf;wp;wr;wreath;wscr;xcap;xcirc;xcup;xdtri;xfr;xhArr;xharr;xi;xlArr;xlarr;xmap;xnis;xodot;xopf;xoplus;xotime;xrArr;xrarr;xscr;xsqcup;xuplus;xutri;xvee;xwedge;yacute|yacute;yacy;ycirc;ycy;yen|yen;yfr;yicy;yopf;yscr;yucy;yuml|yuml;zacute;zcaron;zcy;zdot;zeetrf;zeta;zfr;zhcy;zigrarr;zopf;zscr;zwj;zwnj;";
	static entity_codepoints = [198,198,38,38,193,193,258,194,194,1040,120068,192,192,913,256,10835,260,120120,8289,197,197,119964,8788,195,195,196,196,8726,10983,8966,1041,8757,8492,914,120069,120121,728,8492,8782,1063,169,169,262,8914,8517,8493,268,199,199,264,8752,266,184,183,8493,935,8857,8854,8853,8855,8754,8221,8217,8759,10868,8801,8751,8750,8450,8720,8755,10799,119966,8915,8781,8517,10513,1026,1029,1039,8225,8609,10980,270,1044,8711,916,120071,180,729,733,96,732,8900,8518,120123,168,8412,8784,8751,168,8659,8656,8660,10980,10232,10234,10233,8658,8872,8657,8661,8741,8595,10515,8693,785,10576,10590,8637,10582,10591,8641,10583,8868,8615,8659,119967,272,330,208,208,201,201,282,202,202,1069,278,120072,200,200,8712,274,9723,9643,280,120124,917,10869,8770,8652,8496,10867,919,203,203,8707,8519,1060,120073,9724,9642,120125,8704,8497,8497,1027,62,62,915,988,286,290,284,1043,288,120074,8921,120126,8805,8923,8807,10914,8823,10878,8819,119970,8811,1066,711,94,292,8460,8459,8461,9472,8459,294,8782,8783,1045,306,1025,205,205,206,206,1048,304,8465,204,204,8465,298,8520,8658,8748,8747,8898,8291,8290,302,120128,921,8464,296,1030,207,207,308,1049,120077,120129,119973,1032,1028,1061,1036,922,310,1050,120078,120130,119974,1033,60,60,313,923,10218,8466,8606,317,315,1051,10216,8592,8676,8646,8968,10214,10593,8643,10585,8970,8596,10574,8867,8612,10586,8882,10703,8884,10577,10592,8639,10584,8636,10578,8656,8660,8922,8806,8822,10913,10877,8818,120079,8920,8666,319,10229,10231,10230,10232,10234,10233,120131,8601,8600,8466,8624,321,8810,10501,1052,8287,8499,120080,8723,120132,8499,924,1034,323,327,325,1053,8203,8203,8203,8203,8811,8810,10,120081,8288,160,8469,10988,8802,8813,8742,8713,8800,0,8770,824,8708,8815,8817,0,8807,824,0,8811,824,8825,0,10878,824,8821,0,8782,824,0,8783,824,8938,0,10703,824,8940,8814,8816,8824,0,8810,824,0,10877,824,8820,0,10914,824,0,10913,824,8832,0,10927,824,8928,8716,8939,0,10704,824,8941,0,8847,824,8930,0,8848,824,8931,0,8834,8402,8840,8833,0,10928,824,8929,0,8831,824,0,8835,8402,8841,8769,8772,8775,8777,8740,119977,209,209,925,338,211,211,212,212,1054,336,120082,210,210,332,937,927,120134,8220,8216,10836,119978,216,216,213,213,10807,214,214,8254,9182,9140,9180,8706,1055,120083,934,928,177,8460,8473,10939,8826,10927,8828,8830,8243,8719,8759,8733,119979,936,34,34,120084,8474,119980,10512,174,174,340,10219,8608,10518,344,342,1056,8476,8715,8651,10607,8476,929,10217,8594,8677,8644,8969,10215,10589,8642,10581,8971,8866,8614,10587,8883,10704,8885,10575,10588,8638,10580,8640,10579,8658,8477,10608,8667,8475,8625,10740,1065,1064,1068,346,10940,352,350,348,1057,120086,8595,8592,8594,8593,931,8728,120138,8730,9633,8851,8847,8849,8848,8850,8852,119982,8902,8912,8912,8838,8827,10928,8829,8831,8715,8721,8913,8835,8839,8913,222,222,8482,1035,1062,9,932,356,354,1058,120087,8756,920,0,8287,8202,8201,8764,8771,8773,8776,120139,8411,119983,358,218,218,8607,10569,1038,364,219,219,1059,368,120088,217,217,362,95,9183,9141,9181,8899,8846,370,120140,8593,10514,8645,8597,10606,8869,8613,8657,8661,8598,8599,978,933,366,119984,360,220,220,8875,10987,1042,8873,10982,8897,8214,8214,8739,124,10072,8768,8202,120089,120141,119985,8874,372,8896,120090,120142,119986,120091,926,120143,119987,1071,1031,1070,221,221,374,1067,120092,120144,119988,376,1046,377,381,1047,379,8203,918,8488,8484,119989,225,225,259,8766,0,8766,819,8767,226,226,180,180,1072,230,230,8289,120094,224,224,8501,8501,945,257,10815,38,38,8743,10837,10844,10840,10842,8736,10660,8736,8737,10664,10665,10666,10667,10668,10669,10670,10671,8735,8894,10653,8738,197,9084,261,120146,8776,10864,10863,8778,8779,39,8776,8778,229,229,119990,42,8776,8781,227,227,228,228,8755,10769,10989,8780,1014,8245,8765,8909,8893,8965,8965,9141,9142,8780,1073,8222,8757,8757,10672,1014,8492,946,8502,8812,120095,8898,9711,8899,10752,10753,10754,10758,9733,9661,9651,10756,8897,8896,10509,10731,9642,9652,9662,9666,9656,9251,9618,9617,9619,9608,0,61,8421,0,8801,8421,8976,120147,8869,8869,8904,9559,9556,9558,9555,9552,9574,9577,9572,9575,9565,9562,9564,9561,9553,9580,9571,9568,9579,9570,9567,10697,9557,9554,9488,9484,9472,9573,9576,9516,9524,8863,8862,8864,9563,9560,9496,9492,9474,9578,9569,9566,9532,9508,9500,8245,728,166,166,119991,8271,8765,8909,92,10693,10184,8226,8226,8782,10926,8783,8783,263,8745,10820,10825,10827,10823,10816,0,8745,65024,8257,711,10829,269,231,231,265,10828,10832,267,184,184,10674,162,162,183,120096,1095,10003,10003,967,9675,10691,710,8791,8634,8635,174,9416,8859,8858,8861,8791,10768,10991,10690,9827,9827,58,8788,8788,44,64,8705,8728,8705,8450,8773,10861,8750,120148,8720,169,169,8471,8629,10007,119992,10959,10961,10960,10962,8943,10552,10549,8926,8927,8630,10557,8746,10824,10822,10826,8845,10821,0,8746,65024,8631,10556,8926,8927,8910,8911,164,164,8630,8631,8910,8911,8754,8753,9005,8659,10597,8224,8504,8595,8208,8867,10511,733,271,1076,8518,8225,8650,10871,176,176,948,10673,10623,120097,8643,8642,8900,8900,9830,9830,168,989,8946,247,247,247,8903,8903,1106,8990,8973,36,120149,729,8784,8785,8760,8724,8865,8966,8595,8650,8643,8642,10512,8991,8972,119993,1109,10742,273,8945,9663,9662,8693,10607,10662,1119,10239,10871,8785,233,233,10862,283,8790,234,234,8789,1101,279,8519,8786,120098,10906,232,232,10902,10904,10905,9191,8467,10901,10903,275,8709,8709,8709,8196,8197,8195,331,8194,281,120150,8917,10723,10865,949,949,1013,8790,8789,8770,10902,10901,61,8799,8801,10872,10725,8787,10609,8495,8784,8770,951,240,240,235,235,8364,33,8707,8496,8519,8786,1092,9792,64259,64256,64260,120099,64257,0,102,106,9837,64258,9649,402,120151,8704,8916,10969,10765,189,189,8531,188,188,8533,8537,8539,8532,8534,190,190,8535,8540,8536,8538,8541,8542,8260,8994,119995,8807,10892,501,947,989,10886,287,285,1075,289,8805,8923,8805,8807,10878,10878,10921,10880,10882,10884,0,8923,65024,10900,120100,8811,8921,8503,1107,8823,10898,10917,10916,8809,10890,10890,10888,10888,8809,8935,120152,96,8458,8819,10894,10896,62,62,10919,10874,8919,10645,10876,10886,10616,8919,8923,10892,8823,8819,0,8809,65024,0,8809,65024,8660,8202,189,8459,1098,8596,10568,8621,8463,293,9829,9829,8230,8889,120101,10533,10534,8703,8763,8617,8618,120153,8213,119997,8463,295,8259,8208,237,237,8291,238,238,1080,1077,161,161,8660,120102,236,236,8520,10764,8749,10716,8489,307,299,8465,8464,8465,305,8887,437,8712,8453,8734,10717,305,8747,8890,8484,8890,10775,10812,1105,303,120154,953,10812,191,191,119998,8712,8953,8949,8948,8947,8712,8290,297,1110,239,239,309,1081,120103,567,120155,119999,1112,1108,954,1008,311,1082,120104,312,1093,1116,120156,120000,8666,8656,10523,10510,8806,10891,10594,314,10676,8466,955,10216,10641,10216,10885,171,171,8592,8676,10527,10525,8617,8619,10553,10611,8610,10923,10521,10925,0,10925,65024,10508,10098,123,91,10635,10639,10637,318,316,8968,123,1083,10550,8220,8222,10599,10571,8626,8804,8592,8610,8637,8636,8647,8596,8646,8651,8621,8907,8922,8804,8806,10877,10877,10920,10879,10881,10883,0,8922,65024,10899,10885,8918,8922,10891,8822,8818,10620,8970,120105,8822,10897,8637,8636,10602,9604,1113,8810,8647,8990,10603,9722,320,9136,9136,8808,10889,10889,10887,10887,8808,8934,10220,8701,10214,10229,10231,10236,10230,8619,8620,10629,120157,10797,10804,8727,95,9674,9674,10731,40,10643,8646,8991,8651,10605,8206,8895,8249,120001,8624,8818,10893,10895,91,8216,8218,322,60,60,10918,10873,8918,8907,8905,10614,10875,10646,9667,8884,9666,10570,10598,0,8808,65024,0,8808,65024,8762,175,175,9794,10016,10016,8614,8614,8615,8612,8613,9646,10793,1084,8212,8737,120106,8487,181,181,8739,42,10992,183,183,8722,8863,8760,10794,10971,8230,8723,8871,120158,8723,120002,8766,956,8888,8888,0,8921,824,0,8811,8402,0,8811,824,8653,8654,0,8920,824,0,8810,8402,0,8810,824,8655,8879,8878,8711,324,0,8736,8402,8777,0,10864,824,0,8779,824,329,8777,9838,9838,8469,160,160,0,8782,824,0,8783,824,10819,328,326,8775,0,10861,824,10818,1085,8211,8800,8663,10532,8599,8599,0,8784,824,8802,10536,0,8770,824,8708,8708,120107,0,8807,824,8817,8817,0,8807,824,0,10878,824,0,10878,824,8821,8815,8815,8654,8622,10994,8715,8956,8954,8715,1114,8653,0,8806,824,8602,8229,8816,8602,8622,8816,0,8806,824,0,10877,824,0,10877,824,8814,8820,8814,8938,8940,8740,120159,172,172,8713,0,8953,824,0,8949,824,8713,8951,8950,8716,8716,8958,8957,8742,8742,0,11005,8421,0,8706,824,10772,8832,8928,0,10927,824,8832,0,10927,824,8655,8603,0,10547,824,0,8605,824,8603,8939,8941,8833,8929,0,10928,824,120003,8740,8742,8769,8772,8772,8740,8742,8930,8931,8836,0,10949,824,8840,0,8834,8402,8840,0,10949,824,8833,0,10928,824,8837,0,10950,824,8841,0,8835,8402,8841,0,10950,824,8825,241,241,8824,8938,8940,8939,8941,957,35,8470,8199,8877,10500,0,8781,8402,8876,0,8805,8402,0,62,8402,10718,10498,0,8804,8402,0,60,8402,0,8884,8402,10499,0,8885,8402,0,8764,8402,8662,10531,8598,8598,10535,9416,243,243,8859,8858,244,244,1086,8861,337,10808,8857,10684,339,10687,120108,731,242,242,10689,10677,937,8750,8634,10686,10683,8254,10688,333,969,959,10678,8854,120160,10679,10681,8853,8744,8635,10845,8500,8500,170,170,186,186,8886,10838,10839,10843,8500,248,248,8856,245,245,8855,10806,246,246,9021,8741,182,182,8741,10995,11005,8706,1087,37,46,8240,8869,8241,120109,966,981,8499,9742,960,8916,982,8463,8462,8463,43,10787,8862,10786,8724,10789,10866,177,177,10790,10791,177,10773,120161,163,163,8826,10931,10935,8828,10927,8826,10935,8828,10927,10937,10933,8936,8830,8242,8473,10933,10937,8936,8719,9006,8978,8979,8733,8733,8830,8880,120005,968,8200,120110,10764,120162,8279,120006,8461,10774,63,8799,34,34,8667,8658,10524,10511,10596,0,8765,817,341,8730,10675,10217,10642,10661,10217,187,187,8594,10613,8677,10528,10547,10526,8618,8620,10565,10612,8611,8605,10522,8758,8474,10509,10099,125,93,10636,10638,10640,345,343,8969,125,1088,10551,10601,8221,8221,8627,8476,8475,8476,8477,9645,174,174,10621,8971,120111,8641,8640,10604,961,1009,8594,8611,8641,8640,8644,8652,8649,8605,8908,730,8787,8644,8652,8207,9137,9137,10990,10221,8702,10215,10630,120163,10798,10805,41,10644,10770,8649,8250,120007,8625,93,8217,8217,8908,8906,9657,8885,9656,10702,10600,8478,347,8218,8827,10932,10936,353,8829,10928,351,349,10934,10938,8937,10771,8831,1089,8901,8865,10854,8664,10533,8600,8600,167,167,59,10537,8726,8726,10038,120112,8994,9839,1097,1096,8739,8741,173,173,963,962,962,8764,10858,8771,8771,10910,10912,10909,10911,8774,10788,10610,8592,8726,10803,10724,8739,8995,10922,10924,0,10924,65024,1100,47,10692,9023,120164,9824,9824,8741,8851,0,8851,65024,8852,0,8852,65024,8847,8849,8847,8849,8848,8850,8848,8850,9633,9633,9642,9642,8594,120008,8726,8995,8902,9734,9733,1013,981,175,8834,10949,10941,8838,10947,10945,10955,8842,10943,10617,8834,8838,10949,8842,10955,10951,10965,10963,8827,10936,8829,10928,10938,10934,8937,8831,8721,9834,185,185,178,178,179,179,8835,10950,10942,10968,8839,10948,10185,10967,10619,10946,10956,8843,10944,8835,8839,10950,8843,10956,10952,10964,10966,8665,10534,8601,8601,10538,223,223,8982,964,9140,357,355,1090,8411,8981,120113,8756,8756,952,977,977,8776,8764,8201,8776,8764,254,254,732,215,215,8864,10801,10800,8749,10536,8868,9014,10993,120165,10970,10537,8244,8482,9653,9663,9667,8884,8796,9657,8885,9708,8796,10810,10809,10701,10811,9186,120009,1094,1115,359,8812,8606,8608,8657,10595,250,250,8593,1118,365,251,251,1091,8645,369,10606,10622,120114,249,249,8639,8638,9600,8988,8988,8975,9720,363,168,168,371,120166,8593,8597,8639,8638,8846,965,978,965,8648,8989,8989,8974,367,9721,120010,8944,361,9653,9652,8648,252,252,10663,8661,10984,10985,8872,10652,1013,1008,8709,981,982,8733,8597,1009,962,0,8842,65024,0,10955,65024,0,8843,65024,0,10956,65024,977,8882,8883,1074,8866,8744,8891,8794,8942,124,124,120115,8882,0,8834,8402,0,8835,8402,120167,8733,8883,120011,0,10955,65024,0,8842,65024,0,10956,65024,0,8843,65024,10650,373,10847,8743,8793,8472,120116,120168,8472,8768,8768,120012,8898,9711,8899,9661,120117,10234,10231,958,10232,10229,10236,8955,10752,120169,10753,10754,10233,10230,120013,10758,10756,9651,8897,8896,253,253,1103,375,1099,165,165,120118,1111,120170,120014,1102,255,255,378,382,1079,380,8488,950,120119,1078,8669,120171,120015,8205,8204];
	static decode_map = {};
	static encode_map = {};
	static dbl_encode_map = {};

	static normal_regex = /&((#(?:x[0-9a-f]+|\d+);)|[a-z]+\d?\d?;?)/mgi;
	static strict_regex = /&((#(?:x[0-9a-f]+|\d+);)|[a-z]+\d?\d?;)/mgi;

	static encode(str) 
	{

		let processed = "";
		const n = str.length-1;

		let i;
		for(i=0; i<n; i++) {
			const k = Dentity.dbl_encode_map[ str[i]+str[i+1] ];

			if(k!==undefined) {
				processed+="&"+k;
				i++;
			}
			else if(str[i]==='&') {
				processed+="&amp;";
			}
			else {
				processed+=str[i];
			}
		}
		
		if(i!==n+1) processed+=str[n];

		return processed.replace(/[\u00A0-\u9999<>]/g, function(i) {
			return Dentity.encode_map.hasOwnProperty(i) ? 
						"&"+Dentity.encode_map[i] : '&#'+i.charCodeAt(0)+';';
		});

	}


	static decode(str, is_strict=false) 
	{

		// Partly based on the answer given by user Gumbo on stackoverflow to a related question
		// -> https://stackoverflow.com/a/4339083

		return str.replace(is_strict?Dentity.strict_regex:Dentity.normal_regex, function($0, $1) {
			if ($1[0] === "#") {
				return String.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16)  : parseInt($1.substr(1), 10));
			} else {
				return Dentity.decode_map.hasOwnProperty($1) ? 
				(Dentity.decode_map[$1].length==1?
					String.fromCodePoint(Dentity.decode_map[$1][0]):
					String.fromCodePoint(Dentity.decode_map[$1][0])+String.fromCodePoint(Dentity.decode_map[$1][1])
					): $0;
			}
		});
	};


	static registerPrototypes() 
	{
		String.prototype.decodeHTML = function() { return Dentity.decode(this); };
		String.prototype.encodeHTML = function() { return Dentity.encode(this); };
	}

}


if(Object.keys(Dentity.decode_map).length==0) {

	Dentity.entity_labels = Dentity.entity_labels.replace(/;/g,';|');

	let ls = Dentity.entity_labels.split("|");
	let i=0;

	ls.pop();

	for(let j of ls) {

		if(Dentity.entity_codepoints[i]!=0) {

			Dentity.decode_map[j]=[Dentity.entity_codepoints[i]];

			if(j.endsWith(';')) {
				Dentity.encode_map[ String.fromCodePoint(Dentity.entity_codepoints[i]) ] = j;
			}
			i++;

		}
		else {
			Dentity.decode_map[j]=[Dentity.entity_codepoints[i+1],Dentity.entity_codepoints[i+2]];
			Dentity.dbl_encode_map[ 
				String.fromCodePoint(Dentity.entity_codepoints[i+1])+
				String.fromCodePoint(Dentity.entity_codepoints[i+2]) ] = j;
			i+=3;
		}
	}
}


module.exports = Dentity;
