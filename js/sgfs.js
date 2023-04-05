var sgfs = {
    Opening: {
        Enabled: true,
        AI: {
            Enabled: true,
            Black: {
                Enabled: true,
                C16_C4: [4, 4, "B[pd];W[cd];B[pp];W[cp];B[eq];W[do];B[ec];W[de];B[nq];W[qc];B[qd];W[pc];B[od];W[nb];B[qk];W[fp];B[gq];W[io];B[dj];W[cl]"],
                C16_D3: [4, 4, "B[pd];W[cd];B[pp];W[dq];B[ed];W[ec];B[fc];W[dc];B[fd];W[cf];B[co];W[qc];B[pc];W[qd];B[qf];W[qe];B[pe];W[rf];B[qb];W[rb]"],
                C16_D4: [4, 4, "B[pd];W[cd];B[pp];W[dp];B[ec];W[de];B[cq];W[dq];B[cp];W[cn];B[bn];W[cm];B[bm];W[cl];B[nc];W[qq];B[qp];W[pq];B[nq];W[oq]"],
                D4_D17: [4, 4, "B[pd];W[dp];B[pp];W[dc];B[cq];W[cp];B[dq];W[ep];B[fq];W[qc];B[qd];W[pc];B[od];W[nb];B[gr];W[cf];B[cl];W[go];B[ci];W[pi]"],
                D16_Q4: [4, 4, "B[pd];W[dd];B[dp];W[pp];B[nq];W[qn];B[pq];W[qq];B[qr];W[oq];B[pr];W[op];B[or];W[qc];B[qd];W[pc];B[nc];W[oc];B[od];W[nb]"],
                D17_Q3: [4, 4, "B[pd];W[dc];B[dp];W[pq];B[qo];W[op];B[ce];W[fd];B[qf];W[cn];B[fp];W[ch];B[pl];W[hq];B[jq];W[ho];B[mq];W[jo];B[lo];W[on]"],
                D17_Q4: [4, 4, "B[pd];W[dc];B[dp];W[pp];B[ce];W[ed];B[qq];W[pq];B[qp];W[qn];B[qo];W[po];B[rn];W[qc];B[pc];W[qd];B[qe];W[re];B[rf];W[qf]"],
                D17_R4: [4, 4, "B[pd];W[dc];B[dp];W[qp];B[oq];W[po];B[ce];W[ed];B[hc];W[nc];B[kc];W[qc];B[pc];W[qd];B[pe];W[pb];B[ob];W[qb];B[oc];W[qf]"],
            },
            White: {
                Enabled: true,
                Q16_Q3: [4, 4, "B[pd];W[dp];B[pq];W[dd];B[cq];W[dq];B[cp];W[do];B[bn];W[qc];B[qd];W[pc];B[od];W[nc];B[rc];W[nd];B[qn];W[nf];B[cm];W[iq]"],
                Q16_R4: [4, 4, "B[pd];W[dp];B[qp];W[dd];B[cc];W[dc];B[cd];W[de];B[bf];W[qc];B[pc];W[qd];B[pe];W[rf];B[ic];W[oq];B[cg];W[po];B[qo];W[pn]"],
                R16_C4: [4, 4, "B[qd];W[dd];B[cp];W[pp];B[fq];W[oc];B[pf];W[fc];B[nq];W[pn];B[cf];W[oq];B[cd];W[cc];B[bc];W[cb];B[de];W[bd];B[ce];W[bb]"],
                R16_D3: [4, 4, "B[qd];W[dd];B[dq];W[pp];B[dn];W[oc];B[pf];W[fc];B[cf];W[pn];B[cd];W[cc];B[bc];W[cb];B[de];W[bd];B[ce];W[bb];B[di];W[jq]"],
                R16_D4: [4, 4, "B[qd];W[dd];B[dp];W[pp];B[nc];W[cq];B[dq];W[cp];B[cn];W[co];B[do];W[bn];B[qn];W[nq];B[fc];W[df];B[qp];W[qq];B[rq];W[qo]"],
                R16_Q3: [4, 4, "B[qd];W[dd];B[pq];W[dq];B[cc];W[cd];B[dc];W[ed];B[fb];W[oc];B[qn];W[cn];B[pc];W[od];B[pf];W[kd];B[gc];W[di];B[jq];W[hq]"],
                R16_R4: [4, 4, "B[qd];W[dd];B[qp];W[dp];B[cq];W[cp];B[dq];W[ep];B[fq];W[oc];B[gr];W[oq];B[pf];W[fc];B[cj];W[cl];B[cg];W[ce];B[gc];W[gb]"],
                Q16_Q4: [4, 4, "B[pd];W[dp];B[pp];W[dd];B[fc];W[qq];B[pq];W[qp];B[po];W[rn];B[cf];W[ef];B[ci];W[nc];B[db];W[cc];B[hc];W[gd];B[oc];W[gc];B[gb];W[hd];B[ic];W[id];B[ec];W[ed];B[fq];W[jd];B[cn];W[jb];B[nd];W[ha]"],
            },
        },
    },

    Reduction: {
        Enabled: false,
        ShoulderHit: {
            Enabled: true,
            ToSide: {
                Enabled: true,
                Jump_Wedge: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W]AE[ol];W[jp];B[jq];W[lp];B[kp];W[ko];B[kq];W[lm]LB[ln:B][lo:C][mn:A]"],
                Jump_Extend: [1, 4, "AB[fq][iq][oq][po][pn][ol]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[jq];W[lp];B[kq];W[ln]C[Ladder doesn't work];B[kp]C[W Good];W[ko];B[jo];W[jn];B[io]"],
                Jump_Extend_Ladder: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[jq];W[lp];B[kq];W[lm]C[Ladder works]"],
                Extend: [1, 3, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[jq];W[kp];B[ip]LB[lr:A];W[jn];B[io]C[W Good];W[lm]"],
            },
            ToCenter: {
                Enabled: true,
                Jump: [1, 3, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[ip];W[jn];B[jo];W[ko];B[io];W[kl]LB[kn:B][lm:A];B[lq]"],
                Extend: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[ip];W[jo];B[kr]LB[jq:A];W[io]"],
                Extend_Extend: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp];B[ip];W[jo];B[io]C[W Good];W[jn];B[in];W[jm];B[];W[im]LB[jq:A]"],
            },
            Base: {
                Enabled: true,
                Cut: [1, 4, "AB[jq][pq][qo][qg][pd]AW[qm][qj]C[B to make framework on lower right];B[pk];W[qk];B[pm];W[pn]C[Doesn't work];B[qn];W[pl];B[om]"],
                Extend: [1, 4, "AB[jq][pq][qo][qg][pd]AW[qm][qj]C[B to make framework on lower right];B[pk];W[qk];B[pm];W[qn]C[Doesn't work];B[pn]"],
                Wedge: [1, 4, "AB[jq][pq][qo][qg][pd]AW[qm][qj]C[B to make framework on lower right];B[pk];W[qk];B[pm];W[pl]C[Doesn't work];B[ol];W[ql];B[pn]"],
            },
        },
    },

    Daidaigeima: {
        Enabled: true,
        Invasion: {
            Enabled: true,
            Attach: {
                Enabled: true,
                Wedge_AtariBottom_Left: [1, 6, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq];B[hp];W[ip]C[Ladders work];B[iq];W[io];B[jq];W[gp];B[hr];W[ho];B[gq]"],
                Wedge_AtariBottom_Right_Ladder: [1, 9, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq];B[hp];W[ip]C[Ladders work];B[iq];W[io];B[hr];W[jq];B[gq];W[kp]"],
                Wedge_AtariBottom_Right_Ko: [1, 10, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq];B[hp];W[ip]C[Ladders work];B[iq];W[io];B[hr];W[jq];B[gq];W[ir];B[cq];W[];B[jr];W[hq]"],
                Wedge_AtariBottom_Right_Connect: [1, 10, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq];B[hp];W[ip]C[Ladders work];B[iq];W[io];B[hr];W[jq];B[gq];W[ir];B[hq]C[W Good];W[kp]"],
                Wedge_AtariTop: [1, 4, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq];B[hp];W[ip]C[Ladders work];B[io]C[W Good];W[iq];B[gp];W[jq];B[kp];W[kq];B[];W[];B[lp];W[mq];B[jn]LB[hn:A]"],
                Extend_Connect_Close: [1, 6, "AB[fq][jp][op][pq][dk]AW[dp][cn][qo][ql][qi]PL[W]AE[dj];W[hq];B[hp];W[iq]C[One of the ladders doesn't work];B[ip];W[jq];B[gq];W[lq];B[kp];W[mr]"],
                Extend_Connect_Attach_Hane: [1, 7, "AB[fq][jp][op][pq][dk]AW[dp][cn][qo][ql][qi]PL[W]AE[dj];W[hq];B[hp];W[iq]C[One of the ladders doesn't work];B[ip];W[jq];B[dq];W[kp];B[cp]"],
                Extend_Connect_Attach_React: [1, 7, "AB[fq][jp][op][pq][dk]AW[dp][cn][qo][ql][qi]PL[W]AE[dj];W[hq];B[hp];W[iq]C[One of the ladders doesn't work];B[ip];W[jq];B[dq];W[cq]C[W is dead];B[kq];W[gq];B[gp];W[fr];B[er]"],
                Extend_Down: [1, 2, "AB[fq][jp][pq][po][pn][pm][ok]AW[dp][cn][rp][qn][qm][ql][qi]PL[W]AE[oj];W[hq];B[hp];W[iq]C[One of the ladders doesn't work];B[jq]C[B trades left for right side because of big framework];W[ip];B[io];W[gp];B[ho];W[gq];B[kn]LB[jo:A];W[];B[];W[go]C[F3 had aji]"],
            },
            ShoulderHit: {
                Enabled: true,
                Hane: [1, 4, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq];B[gp];W[jq];B[kq];W[kr]LB[kp:A]"],
                Ko: [1, 4, "AB[fq][jp][op][pq][ab][bc][bd][be][ae][cc][cb][ca]AW[dp][cn][qo][ql][qi][ac][af][bf][cf][ce][cd][dd][dc][db][da]PL[W];W[hq];B[gp];W[jq];B[kq];W[ip]C[W has ko threat];B[jr];W[ir]"],
            },
        },
        Reduction: {
            Enabled: true,
            Center: [1, 1, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W]C[B Good];W[hp];B[hq];W[iq];B[ip];W[gq];B[hr];W[gp];B[gr]"],
        },
    },

    Probing: {
        Enabled: true,
        Enclosure: {
            Enabled: true,
            C3_4: {
                Enabled: true,
                Knight: {
                    Enabled: true,
                    Joseki: [1, 1, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W]C[B Good];W[pm];B[nq];W[qi];B[qg]"],
                    S16_ExtendDown: [1, 2, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd];B[qe];W[pm];B[nq];W[qi]C[B doesn't want to extend anymore];B[];W[qc];B[pc];W[qb];B[re];W[sc]"],
                    S16_BottomHane_CrossCut_SideAtari: [1, 4, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd];B[re];W[qe];B[pe];W[qf];B[rf];W[qg];B[rg];W[qh];B[qc];W[pn];B[nq];W[qj]"],
                    S16_BottomHane_CrossCut_Extend: [1, 4, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd];B[re];W[qe];B[rf]C[Fight];W[pd];B[qc];W[pc];B[qb];W[pb];B[md]"],
                    S16_BottomHane_CrossCut_WallAtari: [1, 4, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd];B[re];W[qe];B[rc]C[W Good];W[pd];B[qc];W[rf];B[sd]C[W shouldn't try to save upper right]"],
                    S16_TopHane: [1, 3, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd];B[rc];W[pd];B[qc]"],
                    S16_ExtendUp: [1, 2, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd];B[qc];W[];B[];W[qe];B[pe];W[qf]"],
                    S16_ExtendLeft: [1, 2, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn][mc]PL[W]C[W Good];W[rd];B[pd];W[re];B[rc];W[];B[];W[qh];B[];W[rb];B[sc];W[pb]"],
                    R15_Hane: [1, 2, "AB[qd][oc]PL[W];W[qe];B[pe];W[qf];B[rd];W[pf];B[oe];W[qj]"],
                    R15_ExtendLeft: [1, 2, "AB[qd][oc]PL[W];W[qe];B[pd];W[rd];B[rc];W[qh]"],
                    R15_ExtendRight: [1, 2, "AB[qd][oc]PL[W];W[qe];B[rd]"],
                    Q16: [1, 1, "AB[qd][oc]PL[W]C[B Good. Aji keshi, not a probe.];W[pd];B[pc];W[qe];B[rd]"],
                    Q17_Extend: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[pc];B[pd];W[ob];B[nc];W[];B[];W[qc]"],
                    Q17_CrossCut: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[pc];B[pd];W[ob];B[pb];W[nc];B[od];W[pa];B[qb];W[lc]"],
                    R17_Extend: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[qc];B[pc];W[rd];B[qe];W[];B[];W[qb]"],
                    R17_CrossCut: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[qc];B[pc];W[rd];B[rc];W[qe];B[pd];W[sc];B[rb];W[qh]"],
                    O16: [1, 1, "AB[qd][oc]PL[W];W[nd]C[Not a probe because B has 1 choice];B[nc];W[ld]"],
                },
                LargeKnight: {
                    Enabled: true,
                    Q16: [1, 1, "AB[qd][nc]PL[W];W[pd];B[pc];W[qe];B[od];W[pe];B[rd]"],
                    O16_HaneLeft_Ko: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works];B[md];W[oc];B[od];W[ne];B[pc];W[mc];B[ob];W[nb]C[B ko not enough threats];B[oc];W[ld];B[em];W[me]"],
                    O16_HaneLeft_Ladder: [1, 2, "AB[qd][nc][pq][qq][qp][qo][ro][so][oq][or][os]PL[W]AW[dn][rr][qr][rq][rp][sp][ss][pr][ps]AE[qs];W[nd]C[Ladder works];B[md];W[oc];B[od];W[ne];B[pc];W[mc];B[ob];W[ld];B[em];W[me];B[];W[];B[mb];W[lb];B[kc]"],
                    O16_HaneRight: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works];B[od];W[mc];B[oc];W[qe];B[pe];W[qf];B[rd]"],
                    O16_ExtendRight: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works];B[oc];W[ld]"],
                    O16_ExtendLeft: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works];B[mc];W[pd];B[pc];W[qe];B[qc]"],
                    R17_Hane: [1, 2, "AB[qd][nc]PL[W];W[qc];B[pc];W[];B[];W[rd];B[rc];W[qb];B[re];W[pd];B[qe];W[oc];B[od];W[pb];B[pe];W[nb]"],
                    R17_Extend: [1, 2, "AB[qd][nc]PL[W];W[qc];B[pd];W[pc];B[oc];W[];B[];W[rd]C[W must have enough ko threats];B[re];W[rb];B[sd];W[sc]"],
                    P16: [1, 1, "AB[qd][nc][id][pj]PL[W]C[Not a probe because B has 1 choice];W[od];B[oc];W[pd];B[pc];W[qe];B[rd];W[of]"],
                },
                OneSpace: {
                    Enabled: true,
                    R15_Hane: [1, 2, "AB[qd][od][jc]PL[W]AE[qj];W[qe];B[pe];W[qf];B[rd];W[pf];B[of];W[og];B[nf];W[qj]"],
                    R15_Pincer: [1, 2, "AB[qd][od][jc]PL[W]AE[qj];W[qe];B[qg]C[W Good];W[qc];B[pd];W[rd];B[rc];W[rb];B[re];W[sc];B[rf];W[ob]"],
                    Q17_AttachLeft_Life: [1, 3, "AB[qd][od][qj][jc]PL[W];W[pc];B[oc];W[qc];B[pd];W[];B[];W[rd]C[W must have enough ko threats];B[re];W[rb];B[sd];W[sc]"],
                    Q17_AttachLeft_Pincer: [1, 3, "AB[qd][od][qj][jc]PL[W];W[pc];B[oc];W[pf];B[pd]LB[qe:A]"],
                    Q17_AttachRight: [1, 2, "AB[qd][od][qj][jc]PL[W];W[pc];B[qc];W[];B[];W[mc];B[oc];W[kd]"],
                    Q17_Connect: [1, 2, "AB[qd][od][qj][jc]PL[W];W[pc];B[pd];W[];B[];W[mc];B[oc];W[kd]"],
                    O16: [1, 1, "AB[qd][od][qj][jc]PL[W];W[nd];B[oc];W[nf]"],
                    R17: [1, 1, "AB[qd][od][qj][jc]PL[W];W[qc];B[pc];W[rd];B[rc];W[qe];B[qb];W[qh]"],
                    Q15: [1, 1, "AB[qd][od][qj][jc]PL[W]C[B Good. Not a probe because B has 1 choice];W[pe];B[pd]"],
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

    Continuation: {
        Enabled: false,
        Corner: {
            Enabled: false,
            C4_4: {
                Enabled: false,
                Kick: {
                    Enabled: false,
                    AttackerHighBase: {
                        Enabled: false,
                        X: [
                            [8, 8, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[pd];W[cq];B[er];W[co];B[cn];W[bn];B[bm];W[bo];B[do];W[br]"],
                            [7, 12, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hq];W[hp];B[fr];W[gr];B[er];W[gq]"],
                            [7, 12, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hq];W[hp];B[fr];W[gr];B[er];W[pc];B[gq];W[iq];B[hr];W[qf];B[gp];W[pj]"],
                            [7, 9, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hr];W[hq];B[iq];W[ip];B[gq];W[hp];B[fr];W[gp];B[gr];W[cq]"],
                            [7, 9, "B[dp];W[fq];B[eq];W[fp];B[dn];W[jp];B[hr];W[hq];B[fr];W[gr];B[gs];W[gq];B[dr]"],
                        ],
                    },
                    AttackerLowBase: {
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
                SanSan: {
                    Enabled: false,
                },
            },
            C3_4: {
                Enabled: false,
                HighApproach: {
                    Enabled: false,
                    AttackerHighBase: {
                        Enabled: false,
                        X: [
                            [9, 9, "B[qd];W[od];B[oc];W[nc];B[pc];W[nd];B[qf];W[jd];B[lb];W[lc];B[kc];W[kd];B[mc];W[ld];B[nb];W[md];B[mb]"],
                        ],
                    },
                    AttackerLowBase: {
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