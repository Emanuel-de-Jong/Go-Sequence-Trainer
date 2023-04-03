var sgfs = {
    Reduction: {
        Enabled: true,
        ShoulderHit: {
            Enabled: true,
            ToSide: {
                Enabled: true,
                Extend: [1, 3, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[jq];W[kp];B[ip]LB[lr:A];W[jn];B[io]C[W Good];W[lm]"],
                Jump_Extend: [1, 4, "AB[fq][iq][oq][po][pn][ol]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[jq];W[lp];B[kq];W[ln]C[Ladder doesn't work];B[kp]C[W Good];W[ko];B[jo];W[jn];B[io]"],
                Jump_Extend_Ladder: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[jq];W[lp];B[kq];W[lm]C[Ladder works]"],
                Jump_Hane: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W]AE[ol];W[jp];B[jq];W[lp];B[kp];W[ko];B[kq];W[lm]LB[ln:B][lo:C][mn:A]"],
            },
            ToCenter: {
                Enabled: false,
                X:[
                    [6, 6, "B[pq]PL[B];B[po]PL[B];B[jq];W[kp];B[jp];W[ko];B[lr];W[jo]"],
                    [6, 6, "B[pq]PL[B];B[po]PL[B];B[jq];W[kp];B[jp];W[kn];B[ko];W[lo];B[jo];W[mm];B[mq]"],
                ],
            },
            Base: {
                Enabled: false,
                X: [
                    [10, 11, "B[pq]PL[B];B[qo]PL[B];B[pd]PL[B];B[qg]PL[B];B[jq];W[qm]PL[W];W[qj];B[pk];W[qk];B[pm];W[pn];B[qn];W[pl];B[om]"],
                    [10, 11, "B[pq]PL[B];B[qo]PL[B];B[pd]PL[B];B[qg]PL[B];B[jq];W[qm]PL[W];W[qj];B[pk];W[qk];B[pm];W[pl];B[ol];W[ql];B[pn]"],
                ],
            },
        },
    },

    Daidaigeima: {
        Enabled: false,
        Invasion: {
            Enabled: false,
            Attatch: {
                Enabled: false,
                X: [
                    [9, 11, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[hp];W[ip];B[io];W[iq];B[gp];W[jq];B[kp];W[kq];B[lp];W[mq]"],
                    [9, 13, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[hp];W[ip];B[iq];W[io];B[jq];W[gp];B[hr];W[ho]"],
                    [9, 13, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[hp];W[ip];B[iq];W[io];B[hr];W[jq];B[gq];W[kp]"],
                    [10, 14, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn];B[ck];W[hq];B[hp];W[iq];B[ip];W[jq];B[gq];W[lq];B[kp];W[mr]"],
                    [10, 14, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn];B[ck];W[hq];B[hp];W[iq];B[ip];W[jq];B[dq];W[kp];B[cp]"],
                    [15, 15, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn];B[pn];W[qn];B[pm];W[qm];B[pl];W[ql]PL[W];W[hq];B[hp];W[iq];B[jq];W[ip];B[io];W[gp];B[ho];W[gq];B[kn]"],
                ],
            },
            ShoulderHit: {
                Enabled: false,
                X: [
                    [9, 12, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[gp];W[jq];B[kq];W[ip];B[jr];W[ir]"],
                    [9, 12, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[gp];W[jq];B[kq];W[kr]"],
                    [9, 12, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[gp];W[jq];B[kq];W[kp]"],
                ],
            },
        },
        Reduction: {
            Enabled: false,
        },
    },

    Probing: {
        Enabled: false,
        Enclosure: {
            Enabled: false,
            C3_4: {
                Enabled: false,
                Knight: {
                    Enabled: false,
                    X: [
                        [8, 10, "B[qd]PL[B];B[oc]PL[B];B[pq];W[po];B[qo];W[qn];B[qp];W[rd];B[qe];W[pm];B[nq];W[qi]"],
                        [8, 10, "B[qd]PL[B];B[oc]PL[B];B[pq];W[po];B[qo];W[qn];B[qp];W[rd];B[qe];W[qc];B[pc];W[qb];B[re];W[sc]"],
                        [8, 11, "B[qd]PL[B];B[oc]PL[B];B[pq];W[po];B[qo];W[qn];B[qp];W[rd];B[re];W[qe];B[rc];W[pd];B[qc];W[rf];B[sd]"],
                        [8, 11, "B[qd]PL[B];B[oc]PL[B];B[pq];W[po];B[qo];W[qn];B[qp];W[rd];B[re];W[qe];B[rf];W[pd];B[qc];W[pc];B[qb];W[pb];B[md]"],
                        [8, 11, "B[qd]PL[B];B[oc]PL[B];B[pq];W[po];B[qo];W[qn];B[qp];W[rd];B[re];W[qe];B[pe];W[qf];B[rf];W[qg];B[rg];W[qh];B[qc];W[pn];B[nq];W[qj]"],
                        [8, 9, "B[qd]PL[B];B[oc]PL[B];B[pq];W[po];B[qo];W[qn];B[qp];W[rd];B[rc];W[pd];B[qc]"],
                        [8, 9, "B[qd]PL[B];B[oc]PL[B];B[pq];W[po];B[qo];W[qn];B[qp];W[rd];B[qc];W[qe];B[pe];W[qf]"],
                        [5, 8, "B[qd]PL[B];B[oc]PL[B];B[jd]PL[B];B[pj];W[pc];B[pd];W[ob];B[nc];W[qc]"],
                        [5, 8, "B[qd]PL[B];B[oc]PL[B];B[jd]PL[B];B[pj];W[pc];B[pd];W[ob];B[pb];W[nc];B[od];W[pa];B[qb];W[lc]"],
                        [5, 8, "B[qd]PL[B];B[oc]PL[B];B[jd]PL[B];B[pj];W[qc];B[pc];W[rd];B[qe];W[qb]"],
                        [5, 8, "B[qd]PL[B];B[oc]PL[B];B[jd]PL[B];B[pj];W[qc];B[pc];W[rd];B[rc];W[qe];B[pd];W[sc];B[rb];W[qh]"],
                        [3, 4, "B[qd]PL[B];B[oc];W[qe];B[pe];W[qf];B[rd];W[pf];B[oe];W[qj]"],
                        [3, 4, "B[qd]PL[B];B[oc];W[qe];B[rd]"],
                        [3, 4, "B[qd]PL[B];B[oc];W[qe];B[pd];W[rd];B[rc];W[qh]"],
                    ],
                },
                LargeKnight: {
                    Enabled: false,
                    X: [
                        [4, 5, "B[qd]PL[B];B[nc];W[dm];W[nd];B[oc];W[ld]"],
                        [4, 5, "B[qd]PL[B];B[nc];W[dm];W[nd];B[mc];W[pd];B[pc];W[qe];B[qc]"],
                        [4, 12, "B[qd]PL[B];B[nc];W[dm];W[nd];B[md];W[oc];B[od];W[ne];B[pc];W[mc];B[ob];W[ld]"],
                        [4, 12, "B[qd]PL[B];B[nc];W[dm];W[nd];B[md];W[oc];B[od];W[ne];B[pc];W[mc];B[ob];W[nb];B[oc];W[ld]"],
                        [4, 5, "B[qd]PL[B];B[nc];W[dm];W[nd];B[od];W[mc];B[oc];W[qe];B[pe];W[qf];B[rd]"],
                        [3, 4, "B[qd]PL[B];B[nc];W[qc];B[pd];W[pc];B[oc];W[rd];B[re];W[rb];B[sd];W[sc]"],
                        [3, 4, "B[qd]PL[B];B[nc];W[qc];B[pc];W[rd];B[rc];W[qb];B[re];W[pd];B[qe];W[oc];B[od];W[pb];B[pe];W[nb]"],
                        [3, 4, "B[qd]PL[B];B[nc];W[pd];B[pc];W[qe];B[od];W[pe];B[rd]"],
                        [7, 7, "B[qd]PL[B];B[nc]PL[B];B[pj]PL[B];B[id]PL[B];B[mj]PL[B];B[ig];W[od];B[oc];W[pd];B[pc];W[qe];B[rd];W[of]"],
                    ],
                },
                OneSpace: {
                    Enabled: false,
                    X: [
                        [5, 5, "B[qd]PL[B];B[od]PL[B];B[qj]PL[B];B[jc];W[qc];B[pc];W[rd];B[rc];W[qe];B[qb];W[qh]"],
                        [5, 7, "B[qd]PL[B];B[od]PL[B];B[qj]PL[B];B[jc];W[pc];B[oc];W[qc];B[pd];W[rd];B[re];W[rb];B[sd];W[sc]"],
                        [5, 7, "B[qd]PL[B];B[od]PL[B];B[qj]PL[B];B[jc];W[pc];B[oc];W[pf];B[pd]"],
                        [5, 6, "B[qd]PL[B];B[od]PL[B];B[qj]PL[B];B[jc];W[pc];B[qc];W[mc];B[oc]"],
                        [5, 7, "B[qd]PL[B];B[od]PL[B];B[qj]PL[B];B[jc];W[pc];B[pd];W[oc]"],
                        [5, 7, "B[qd]PL[B];B[od]PL[B];B[qj]PL[B];B[jc];W[pc];B[pd];W[mc];B[oc]"],
                        [5, 5, "B[qd]PL[B];B[od]PL[B];B[qj]PL[B];B[jc];W[nd];B[oc];W[nf]"],
                        [4, 4, "B[qd]PL[B];B[od]PL[B];B[jc];W[qe];B[pe];W[qf];B[rd];W[pf];B[of];W[og];B[nf];W[qj]"],
                    ],
                },
                TwoSpace: {
                    Enabled: false,
                    X: [
                        [3, 3, "B[qd]PL[B];B[nd];W[oc];B[nc];W[qc];B[pd];W[pc];B[od];W[rd];B[re];W[rc]"],
                        [4, 7, "B[qd]PL[B];B[nd];W[do]PL[W];W[pd];B[pc];W[qc];B[pe];W[od];B[oc]"],
                        [4, 10, "B[qd]PL[B];B[nd];W[do]PL[W];W[pd];B[pc];W[qc];B[oc];W[rd];B[qe];W[qb];B[re];W[sc]"],
                        [4, 10, "B[qd]PL[B];B[nd];W[do]PL[W];W[pd];B[pc];W[qc];B[oc];W[rd];B[qe];W[re];B[qb];W[qf];B[rc];W[pe];B[qc];W[qi]"],
                        [4, 8, "B[qd]PL[B];B[nd];W[do]PL[W];W[pd];B[pc];W[qc];B[oc];W[pf];B[rd];W[pi]"],
                    ],
                },
            },
        },
    },

    CornerJoseki: {
        Enabled: false,
        C4_4: {
            Enabled: false,
            Kick: {
                Enabled: false,
                AttackerHighBase: {
                    Enabled: false,
                    Continuation: {
                        Enabled: false,
                        X: [
                            [8, 8, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[pd];W[cq];B[er];W[co];B[cn];W[bn];B[bm];W[bo];B[do];W[br]"],
                            [7, 12, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hq];W[hp];B[fr];W[gr];B[er];W[gq]"],
                            [7, 12, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hq];W[hp];B[fr];W[gr];B[er];W[pc];B[gq];W[iq];B[hr];W[qf];B[gp];W[pj]"],
                            [7, 9, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hr];W[hq];B[iq];W[ip];B[gq];W[hp];B[fr];W[gp];B[gr];W[cq]"],
                            [7, 9, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hr];W[hq];B[fr];W[gr];B[gs];W[gq];B[dr]"],
                        ],
                    },
                },
                AttackerLowBase: {
                    Enabled: false,
                    Continuation: {
                        Enabled: false,
                        X: [
                            [7, 10, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[hp];B[hr];W[ip];B[fr]"],
                            [7, 15, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[hp];B[hr];W[fr];B[ip];W[iq];B[jp];W[kq];B[pg]PL[B];B[gp];W[ho];B[go];W[gq];B[hn]"],
                            [7, 23, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[hp];B[hr];W[fr];B[ip];W[iq];B[jp];W[kq]PL[W];W[pg];B[kp];W[lq];B[lp];W[mq];B[gp];W[ho];B[go];W[gq];B[hn];W[io];B[jn]"],
                            [7, 23, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[hp];B[hr];W[fr];B[ip];W[iq];B[jp];W[kq]PL[W];W[pg];B[kp];W[lq];B[lp];W[mq];B[gp];W[ho];B[go];W[hn];B[gq];W[cq]"],
                            [7, 14, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[hp];B[hr];W[fr];B[ip];W[ho];B[jp];W[lq]"],
                            [7, 8, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[hr];B[fr];W[gr];B[er];W[hp]"],
                            [7, 11, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[fr];B[hp];W[fn];B[hn];W[fl];B[mq]"],
                            [7, 12, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[fr];B[hp];W[fn];B[jp];W[kp];B[kq]"],
                            [7, 9, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jq];B[hq];W[fr];B[iq];W[jp];B[ho];W[fn]"],
                        ],
                    },
                },
            },
            SanSan: {
                Enabled: false,
                Continuation: {
                    Enabled: false,
                },
            },
        },
        C3_4: {
            Enabled: false,
            HighApproach: {
                Enabled: false,
                AttackerHighBase: {
                    Enabled: false,
                    Continuation: {
                        Enabled: false,
                        X: [
                            [9, 9, "B[qd];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[lb];W[lc];B[kc];W[kd];B[mc];W[ld];B[nb];W[md];B[mb]"],
                        ],
                    },
                },
                AttackerLowBase: {
                    Enabled: false,
                    Continuation: {
                        Enabled: false,
                        X: [
                            [9, 13, "B[qd];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jc];B[lc]SBKV[47.04];W[pd];B[qc];W[ld];B[lb];W[nb];B[kd];W[kc];B[jd];W[ic];B[id];W[hc];B[md];W[le];B[me];W[lf];B[mc];W[mf];B[ne];W[of];B[oe];W[pe];B[pf];W[nf]"],
                            [9, 13, "B[qd];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jc];B[lc];W[pd];B[qc];W[ld];B[kd];W[kc];B[le];W[md]"],
                        ],
                    },
                },
            },
        },
    },

    LifeDeath: {
        Enabled: false,
        Corner: {
            Enabled: false,
            L: {
                Enabled: false,
            },
            L1f: {
                Enabled: false,
            },
            L1s: {
                Enabled: false,
            },
            L2: {
                Enabled: false,
            },
        },
    },

    Other: {
        Enabled: false,
    },
};