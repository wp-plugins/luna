function LunaRun(base_url)
{
  obj = new Luna(base_url);
  obj.init();
  obj.visaMoonphase();
}

function Luna(base_url)
{
  var tdy;
  var ph_i;
  var p_o_f;
  var ph_p;
  var ph_dec;
  var mimg;
  this.init = function()
  {
    tdy=new Date();
    ph_i=this.cmm_gPh(tdy);
    p_o_f=ph_i.ph;
    ph_p=ph_i.a;
    ph_dec=this.rnd(ph_p,0)/100;
    mimg=this.rnd((ph_dec*40),0);
    mimg=(mimg==40?0:(mimg+1));
  }
  this.visaMoonphase = function()
  {
    var prefix = mimg;
    if (mimg < 10) prefix = "0" + mimg;
    document.write('<img src="' + base_url + '/pix/moonphase' + prefix + '.gif" width="150" height="150">');
    document.write('<p>' + this.phD(ph_p) + '</p>');
    this.rnd(p_o_f,0) + '% of Full';
  }
  this.visaMoonphaseProcent = function() {
    document.write(this.rnd(p_o_f,0) + '% full');
  }
  var MSPD = 24*60*60*1000;
  var aDW = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
  var aM2 = new
  Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
  this.phD = function(ph_p) {
    var d;
    if      ((ph_p >=  0  ) && (ph_p <=  2.49)) d = luna_php.new_moon;
    else if ((ph_p >=  2.5) && (ph_p <= 22.49)) d = luna_php.waxing_crescent;
    else if ((ph_p >= 22.5) && (ph_p <= 27.49)) d = luna_php.first_quarter_moon;
    else if ((ph_p >= 27.5) && (ph_p <= 47.49)) d = luna_php.waxing_gibbous;
    else if ((ph_p >= 47.5) && (ph_p <= 52.49)) d = luna_php.full_moon;
    else if ((ph_p >= 52.5) && (ph_p <= 73.49)) d = luna_php.waning_gibbous;
    else if ((ph_p >= 73.5) && (ph_p <= 77.49)) d = luna_php.third_quarter_moon;
    else if ((ph_p >= 77.5) && (ph_p <= 97.49)) d = luna_php.waning_crescent;
    else                                        d = luna_php.new_moon;
    return d;
  }
  this.rnd = function(val, prec) {
    if (this.rnd.arguments.length==1) prec=0;
    val = val * Math.pow(10,prec);
    val = Math.round(val);
    val = val / Math.pow(10,prec);
    return val;
  }
  this.cmm_dAdj = function(x) {
    if(x>360) {
      while(x>360) {
        x -= 360;
      }
    }
    else if(x<0) {
      while(x<0) {
        x += 360;
      }
    }
    return x;
  }
  this.cmm_dToR = function(d){
    return d*2*Math.PI/360;
  }
  this.cmm_gPh = function(msdate) {
    var E = new Date(Date.UTC(1990,0,1,0,0,0,0));
    var dn = (msdate - E.getTime())/MSPD+1;
    var EL_E = 279.403303;
    var EL_P = 282.768422;
    var N = (360/365.242191) * dn;
    N = this.cmm_dAdj(N);
    var M = N + EL_E - EL_P;
    S_M = this.cmm_dAdj(M);
    var E = (360/Math.PI)*0.016713*Math.sin(this.cmm_dToR(S_M));
    var S_L = N + E + EL_E;
    S_L = this.cmm_dAdj(S_L);
    var tmp;
    var LO = 318.351648;
    var PO = 36.340410;
    var NO = 318.510107;
    var l = this.cmm_dAdj(13.1763966*dn + LO);
    var Mm = this.cmm_dAdj(l - 0.1114041*dn-PO);
    var N = this.cmm_dAdj(NO - 0.0529539*dn);
    tmp = (2*(l - S_L))-Mm;
    var Ev = 1.2739*Math.sin(this.cmm_dToR(tmp));
    tmp = this.cmm_dToR(S_M);
    var Ae = 0.1858*Math.sin(tmp);
    var A3 = 0.37*Math.sin(tmp);
    var Mm1 = Mm + Ev - Ae - A3;
    var Ec = 6.2886*Math.sin(this.cmm_dToR(Mm1));
    var A4 = 0.214*Math.sin(2*this.cmm_dToR(Mm1));
    var l1 = l + Ev + Ec - Ae + A4;
    var V = 0.6583*Math.sin(this.cmm_dToR(2*(l1-S_L)));
    var mTL = l1 + V;
    var D = mTL - S_L;
    D = this.cmm_dAdj(D);
    var F = 0.5*(1-Math.cos(this.cmm_dToR(D)));
    F = F*100;
    var tmp = new Object();
    tmp.ph = F;
    tmp.D = D;
    tmp.a = D/360*100;
    return tmp;
  }
}

jQuery(document).ready(function() {
  //
});

