var sgfs = {
    // https://github.com/Emanuel-de-Jong/GoTrainer-HumanAI/tree/joseki/sgfs
    Joseki: {
        Enabled: false,
    },

    // https://github.com/Emanuel-de-Jong/GoTrainer-HumanAI/tree/perfect-seq/sgfs
    Opening: {
        Enabled: false,
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

    // GoMagic Fearless Invasions https://gomagic.org/lessons/reducing-is-good-enough/
    Reduction: {
        Enabled: true,
        ShoulderHit: {
            Enabled: true,
            ToSide: {
                Enabled: true,
                Jump_Wedge: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W]AE[ol];W[jp]TR[ip]CR[jq];B[jq]TR[kp]CR[lp];W[lp]CR[kp]TR[kq];B[kp];W[ko];B[kq];W[lm]LB[ln:B][lo:C][mn:A]"],
                Jump_Extend: [1, 4, "AB[fq][iq][oq][po][pn][ol]AW[co][dq][qp][qo][qm]PL[W];W[jp]TR[ip]CR[jq];B[jq]TR[kp]CR[lp];W[lp]TR[kp]CR[kq];B[kq];W[ln]C[Ladder doesn't work];B[kp]C[Attacker good];W[ko];B[jo];W[jn];B[io]"],
                Jump_Extend_Ladder: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp]TR[ip]CR[jq];B[jq]TR[kp]CR[lp];W[lp]TR[kp]CR[kq];B[kq];W[lm]C[Ladder works]"],
                Extend: [1, 3, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp]TR[ip]CR[jq];B[jq]CR[kp]TR[lp];W[kp];B[ip]LB[lr:A];W[jn];B[io]C[Attacker good];W[lm]"],
            },
            ToCenter: {
                Enabled: true,
                Jump: [1, 3, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp]CR[ip]TR[jq];B[ip]CR[jn]TR[jo];W[jn];B[jo];W[ko];B[io];W[kl]LB[kn:B][lm:A];B[lq]"],
                Extend: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp]CR[ip]TR[jq];B[ip]TR[jn]CR[jo];W[jo]CR[kr];B[kr]LB[jq:A];W[io]"],
                Extend_Extend: [1, 4, "AB[fq][iq][oq][po][pn]AW[co][dq][qp][qo][qm]PL[W];W[jp]CR[ip]TR[jq];B[ip]TR[jn]CR[jo];W[jo]CR[io];B[io]C[Attacker good];W[jn];B[in];W[jm];B[];W[im]LB[jq:A]"],
            },
            Base: {
                Enabled: true,
                Cut: [1, 4, "AB[jq][pq][qo][qg][pd]AW[qm][qj]C[Attacker to make framework on lower right];B[pk];W[qk];B[pm]TR[pl][qn]CR[pn];W[pn]C[Doesn't work];B[qn];W[pl];B[om]"],
                Extend: [1, 4, "AB[jq][pq][qo][qg][pd]AW[qm][qj]C[Attacker to make framework on lower right];B[pk];W[qk];B[pm]TR[pl][pn]CR[qn];W[qn]C[Doesn't work];B[pn]"],
                Wedge: [1, 4, "AB[jq][pq][qo][qg][pd]AW[qm][qj]C[Attacker to make framework on lower right];B[pk];W[qk];B[pm]CR[pl]TR[pn][qn];W[pl]C[Doesn't work];B[ol];W[ql];B[pn]"],
            },
        },
    },

    // GoMagic Fearless Invasions https://gomagic.org/lessons/daidaigeima/
    Daidaigeima: {
        Enabled: false,
        Invasion: {
            Enabled: true,
            Attach: {
                Enabled: true,
                Wedge_AtariBottom_Left: [1, 6, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq]TR[gp]CR[hp];B[hp]CR[ip]TR[iq];W[ip]C[Ladders work]TR[io]CR[iq];B[iq];W[io]TR[hr]CR[jq];B[jq];W[gp];B[hr];W[ho];B[gq]"],
                Wedge_AtariBottom_Right_Ladder: [1, 9, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq]TR[gp]CR[hp];B[hp]CR[ip]TR[iq];W[ip]C[Ladders work]TR[io]CR[iq];B[iq];W[io]CR[hr]TR[jq];B[hr];W[jq];B[gq]TR[ir]CR[kp];W[kp]"],
                Wedge_AtariBottom_Right_Ko: [1, 10, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq]TR[gp]CR[hp];B[hp]CR[ip]TR[iq];W[ip]C[Ladders work]TR[io]CR[iq];B[iq];W[io]CR[hr]TR[jq];B[hr];W[jq];B[gq]CR[ir]TR[kp];W[ir]CR[cq];B[cq];W[];B[jr];W[hq]"],
                Wedge_AtariBottom_Right_Connect: [1, 10, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq]TR[gp]CR[hp];B[hp]CR[ip]TR[iq];W[ip]C[Ladders work]TR[io]CR[iq];B[iq];W[io]CR[hr]TR[jq];B[hr];W[jq];B[gq]CR[ir]TR[kp];W[ir]TR[cq]CR[hq];B[hq]C[Attacker good];W[kp]"],
                Wedge_AtariTop: [1, 4, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq]TR[gp]CR[hp];B[hp]CR[ip]TR[iq];W[ip]C[Ladders work]CR[io]TR[iq];B[io]C[Attacker good];W[iq];B[gp];W[jq];B[kp];W[kq];B[];W[];B[lp];W[mq];B[jn]LB[hn:A]"],
                Extend_Connect_Close: [1, 6, "AB[fq][jp][op][pq][dk]AW[dp][cn][qo][ql][qi]PL[W]AE[dj];W[hq]TR[gp]CR[hp];B[hp]TR[ip]CR[iq];W[iq]C[One of the ladders doesn't work];B[ip];W[jq]TR[dq]CR[gq];B[gq];W[lq];B[kp];W[mr]"],
                Extend_Connect_Attach_Hane: [1, 7, "AB[fq][jp][op][pq][dk]AW[dp][cn][qo][ql][qi]PL[W]AE[dj];W[hq]TR[gp]CR[hp];B[hp]TR[ip]CR[iq];W[iq]C[One of the ladders doesn't work];B[ip];W[jq]CR[dq]TR[gq];B[dq]CR[kp];W[kp];B[cp]"],
                Extend_Connect_Attach_React: [1, 7, "AB[fq][jp][op][pq][dk]AW[dp][cn][qo][ql][qi]PL[W]AE[dj];W[hq]TR[gp]CR[hp];B[hp]TR[ip]CR[iq];W[iq]C[One of the ladders doesn't work];B[ip];W[jq]CR[dq]TR[gq];B[dq]CR[cq]TR[kp];W[cq]C[Attacker is dead];B[kq];W[gq];B[gp];W[fr];B[er]"],
                Extend_Down: [1, 2, "AB[fq][jp][pq][po][pn][pm][ok]AW[dp][cn][rp][qn][qm][ql][qi]PL[W]AE[oj];W[hq]TR[gp]CR[hp];B[hp]TR[ip]CR[iq];W[iq]C[One of the ladders doesn't work];B[jq]C[Defender trades left for right side because of big framework];W[ip];B[io];W[gp];B[ho];W[gq];B[kn]LB[jo:A];W[];B[];W[go]C[F3 had aji]"],
            },
            ShoulderHit: {
                Enabled: true,
                Hane: [1, 4, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W];W[hq]CR[gp]TR[hp];B[gp];W[jq];B[kq];W[kr]LB[kp:A]"],
                Ko: [1, 4, "AB[fq][jp][op][pq][ab][bc][bd][be][ae][cc][cb][ca]AW[dp][cn][qo][ql][qi][ac][af][bf][cf][ce][cd][dd][dc][db][da]PL[W];W[hq]CR[gp]TR[hp];B[gp];W[jq];B[kq];W[ip]C[Attacker has ko threat];B[jr];W[ir]"],
            },
        },
        Reduction: {
            Enabled: true,
            Center: [1, 1, "AB[fq][jp][op][pq]AW[dp][cn][qo][ql][qi]PL[W]C[Defender good];W[hp];B[hq];W[iq];B[ip];W[gq];B[hr];W[gp];B[gr]"],
        },
    },

    Probing: {
        Enabled: false,
        Enclosure: {
            Enabled: true,
            C3_4: {
                Enabled: true,
                // GoMagic Probing Moves https://gomagic.org/lessons/the-knights-move-enclosure-kejma-simari/
                Knight: {
                    Enabled: true,
                    Joseki: [1, 1, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W]C[Defender good];W[pm];B[nq];W[qi];B[qg]"],
                    S16_ExtendDown: [1, 2, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd]TR[qc][rc][re]CR[qe];B[qe];W[pm];B[nq];W[qi]C[Defender doesn't want to extend anymore];B[];W[qc];B[pc];W[qb];B[re];W[sc]"],
                    S16_BottomHane_SideAtari: [1, 4, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd]TR[qc][qe][rc]CR[re];B[re];W[qe]CR[pe]TR[rf];B[pe];W[qf];B[rf];W[qg];B[rg];W[qh];B[qc];W[pn];B[nq];W[qj]"],
                    S16_BottomHane_Extend: [1, 4, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd]TR[qc][qe][rc]CR[re];B[re];W[qe]TR[pe]CR[rf];B[rf]C[Fight];W[pd];B[qc];W[pc];B[qb];W[pb];B[md]"],
                    S16_BottomHane_WallAtari: [1, 4, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd]TR[qc][qe][rc]CR[re];B[re];W[qe]TR[pe][rf]CR[rc];B[rc]C[Attacker good];W[pd];B[qc];W[rf];B[sd]C[Attacker shouldn't try to save upper right]"],
                    S16_TopHane: [1, 3, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd]TR[qc][qe][re]CR[rc];B[rc];W[pd];B[qc]"],
                    S16_ExtendUp: [1, 2, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn]PL[W];W[rd]CR[qc]TR[qe][rc][re];B[qc];W[];B[];W[qe];B[pe];W[qf]"],
                    S16_ExtendLeft: [1, 2, "AB[pq][qo][qp][qd][oc]AW[dd][dp][po][qn][mc]PL[W]C[Attacker good];W[rd]CR[pd]TR[qc][qe][rc][re];B[pd];W[re];B[rc];W[];B[];W[qh];B[];W[rb];B[sc];W[pb]"],
                    R15_Hane: [1, 2, "AB[qd][oc]PL[W];W[qe]TR[pd][rd]CR[pe];B[pe];W[qf];B[rd];W[pf];B[oe];W[qj]"],
                    R15_ExtendLeft: [1, 2, "AB[qd][oc]PL[W];W[qe]CR[pd]TR[pe][rd];B[pd];W[rd];B[rc];W[qh]"],
                    R15_ExtendRight: [1, 2, "AB[qd][oc]PL[W];W[qe]TR[pd][pe]CR[rd];B[rd]"],
                    Q16: [1, 1, "AB[qd][oc]PL[W]C[Defender good. Aji keshi, not a probe.];W[pd];B[pc];W[qe];B[rd]"],
                    Q17_Extend: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[pc];B[pd];W[ob]CR[nc]TR[pb];B[nc];W[];B[];W[qc]"],
                    Q17_CrossCut: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[pc];B[pd];W[ob]TR[nc]CR[pb];B[pb];W[nc];B[od];W[pa];B[qb];W[lc]"],
                    R17_Extend: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[qc];B[pc];W[rd]CR[qe]TR[rc];B[qe];W[];B[];W[qb]"],
                    R17_CrossCut: [1, 4, "AB[qd][oc][pj][jd]PL[W]AE[id];W[qc];B[pc];W[rd]TR[qe]CR[rc];B[rc];W[qe];B[pd];W[sc];B[rb];W[qh]"],
                    O16: [1, 1, "AB[qd][oc]PL[W];W[nd]C[Not a probe because defender has 1 choice];B[nc];W[ld]"],
                },
                // GoMagic Probing Moves https://gomagic.org/lessons/the-large-knights-move-enclosure-ogejma-simari/
                LargeKnight: {
                    Enabled: true,
                    Q16: [1, 1, "AB[qd][nc]PL[W];W[pd];B[pc];W[qe];B[od];W[pe];B[rd]"],
                    O16_HaneLeft_Ko: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works]TR[mc][oc][od]CR[md];B[md];W[oc];B[od];W[ne];B[pc];W[mc];B[ob];W[nb]C[Defender ko not enough threats];B[oc];W[ld];B[em];W[me]"],
                    O16_HaneLeft_Ladder: [1, 2, "AB[qd][nc][pq][qq][qp][qo][ro][so][oq][or][os]PL[W]AW[dn][rr][qr][rq][rp][sp][ss][pr][ps]AE[qs];W[nd]C[Ladder works]TR[mc][oc][od]CR[md];B[md];W[oc];B[od];W[ne];B[pc];W[mc];B[ob];W[ld];B[em];W[me];B[];W[];B[mb];W[lb];B[kc]"],
                    O16_HaneRight: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works]TR[mc][md][oc]CR[od];B[od];W[mc];B[oc];W[qe];B[pe];W[qf];B[rd]"],
                    O16_ExtendRight: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works]TR[mc][md][od]CR[oc];B[oc];W[ld]"],
                    O16_ExtendLeft: [1, 2, "AB[qd][nc]PL[W]AW[dn];W[nd]C[Ladder works]CR[mc]TR[md][oc][od];B[mc];W[pd];B[pc];W[qe];B[qc]"],
                    R17_Hane: [1, 2, "AB[qd][nc]PL[W];W[qc]CR[pc]TR[pd];B[pc];W[];B[];W[rd];B[rc];W[qb];B[re];W[pd];B[qe];W[oc];B[od];W[pb];B[pe];W[nb]"],
                    R17_Extend: [1, 2, "AB[qd][nc]PL[W];W[qc]TR[pc]CR[pd];B[pd];W[pc];B[oc];W[];B[];W[rd]C[Attacker must have enough ko threats];B[re];W[rb];B[sd];W[sc]"],
                    P16: [1, 1, "AB[qd][nc][id][pj]PL[W]C[Not a probe because defender has 1 choice];W[od];B[oc];W[pd];B[pc];W[qe];B[rd];W[of]"],
                },
                // GoMagic Probing Moves https://gomagic.org/lessons/the-one-space-jump-enclosure-ikken-tobi-simari/
                OneSpace: {
                    Enabled: true,
                    R15_Hane: [1, 2, "AB[qd][od][jc]PL[W]AE[qj];W[qe]CR[pe];B[pe];W[qf];B[rd];W[pf];B[of];W[og];B[nf];W[qj]"],
                    R15_Pincer: [1, 2, "AB[qd][od][jc]PL[W]AE[qj];W[qe]TR[pe]CR[qg];B[qg]C[Attacker good];W[qc];B[pd];W[rd];B[rc];W[rb];B[re];W[sc];B[rf];W[ob]"],
                    Q17_AttachLeft_Life: [1, 3, "AB[qd][od][qj][jc]PL[W];W[pc]CR[oc]TR[pd][qc];B[oc]TR[pf]CR[qc];W[qc];B[pd];W[];B[];W[rd]C[Attacker must have enough ko threats];B[re];W[rb];B[sd];W[sc]"],
                    Q17_AttachLeft_Pincer: [1, 3, "AB[qd][od][qj][jc]PL[W];W[pc]CR[oc]TR[pd][qc];B[oc]CR[pf]TR[qc];W[pf];B[pd]LB[qe:A]"],
                    Q17_AttachRight: [1, 2, "AB[qd][od][qj][jc]PL[W];W[pc]TR[oc][pd]CR[qc];B[qc];W[];B[];W[mc];B[oc];W[kd]"],
                    Q17_Connect: [1, 2, "AB[qd][od][qj][jc]PL[W];W[pc]TR[oc][qc]CR[pd];B[pd];W[];B[];W[mc];B[oc];W[kd]"],
                    O16: [1, 1, "AB[qd][od][qj][jc]PL[W];W[nd];B[oc];W[nf]"],
                    R17: [1, 1, "AB[qd][od][qj][jc]PL[W];W[qc];B[pc];W[rd];B[rc];W[qe];B[qb];W[qh]"],
                    Q15: [1, 1, "AB[qd][od][qj][jc]PL[W]C[Defender good. Not a probe because defender has 1 choice];W[pe];B[pd]"],
                },
                // GoMagic Probing Moves https://gomagic.org/lessons/the-modern-two-space-jump-enclosure-sovremennoe-niken-tobi-simari/
                TwoSpace: {
                    Enabled: true,
                    Q16_Atari: [1, 3, "AB[qd][nd]PL[W]C[Defender good. Ladder good for defender];W[pd];B[pc];W[qc];B[pe]LB[oc:2][od:1]C[The ladder];W[rd];B[od];W[qb];B[re];W[sc]"],
                    Q16_Extend_Jump: [1, 7, "AB[qd][nd]PL[W]AW[dp];W[pd]C[Ladder good for attacker];B[pc];W[qc];B[oc];W[];B[]CR[pf]TR[rd];W[pf];B[rd];W[pi];B[];W[qe]"],
                    Q16_Extend_Atari_ExtendBottom_Atari: [1, 10, "AB[qd][nd]PL[W]AW[dp];W[pd]C[Ladder good for attacker];B[pc];W[qc];B[oc];W[];B[]TR[pf]CR[rd];W[rd];B[qe]TR[qb]CR[re];W[re]CR[qb];B[qb];W[qf];B[rc];W[pe];B[qc];W[qi]"],
                    Q16_Extend_Atari_ExtendBottom_Extend: [1, 10, "AB[qd][nd]PL[W]AW[dp];W[pd]C[Ladder good for attacker];B[pc];W[qc];B[oc];W[];B[]TR[pf]CR[rd];W[rd];B[qe]TR[qb]CR[re];W[re]TR[qb]CR[qf];B[qf]C[Attacker good];W[qb]"],
                    Q16_Extend_Atari_ExtendTop: [1, 9, "AB[qd][nd]PL[W]AW[dp];W[pd]C[Ladder good for attacker];B[pc];W[qc];B[oc];W[];B[]TR[pf]CR[rd];W[rd];B[qe]CR[qb]TR[re];W[qb];B[re];W[sc]"],
                    P17: [1, 1, "AB[qd][nd]PL[W]C[Bad on empty board. Invasion, not a probe];W[oc];B[nc];W[qc];B[pd];W[pc];B[od];W[rd];B[re];W[rc]"],
                    N15: [1, 1, "AB[qd][nd]PL[W]C[Defender good];W[me];B[md];W[ke]"],
                },
            },
        },
    },

    Continuation: {
        Enabled: false,
        Corner: {
            Enabled: true,
            C4_4: {
                Enabled: true,
                // DGC 01-03-23 DAN https://vimeo.com/803854104/5e3e349534
                Kick: {
                    Enabled: true,
                    AttackerHighBase: {
                        Enabled: false,
                        H2_Attach_HaneConnect: [1, 3, "AB[dn][dp][eq]AW[fq][fp][jp]PL[B];B[hr];W[hq]CR[fr]TR[iq];B[fr];W[gr];B[gs];W[gq];B[dr]C[Corner is solid]"],
                        H2_Attach_HaneRight: [1, 3, "AB[dn][dp][eq]AW[fq][fp][jp]PL[B];B[hr];W[hq]TR[fr]CR[iq];B[iq];W[ip];B[gq];W[hp];B[fr];W[gp];B[gr]C[Corner has weaknesses]"],
                        H2_Kick: [1, 2, "AB[dn][dp][eq]AW[fq][fp][jp]PL[B];B[hr]CR[gr]TR[hq];W[gr]C[Attacker good];B[hp]LB[hn:A][kq:B]C[A and B are miai for attacker]"],
                        H3: [1, 1, "AB[dn][dp][eq]AW[fq][fp][jp]PL[B];B[hq];W[hp];B[fr];W[gr];B[er];W[];B[gq]C[Defender good];W[iq];B[hr];W[];B[gp];W[]LB[ho:A]"],
                        W_C3: [1, 1, "AB[dn][dp][eq]AW[fq][fp][jp]PL[W];W[cq];B[er];W[co];B[cn];W[bn];B[bm];W[bo];B[do];W[br]"],
                    },
                    AttackerLowBase: {
                        Enabled: true,
                        H3_AttachDown_HaneCorner: [1, 5, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]TR[fr][hp]CR[hr];W[hr];B[];W[];B[fr];W[gr];B[er];W[hp]"],
                        H3_AttachDown_HaneLeft: [1, 3, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]TR[fr][hp]CR[hr];W[hr];B[];W[]TR[fr]CR[gr];B[gr]C[Defender good];W[fr];B[ir];W[hp];B[iq];W[ip];B[jr];W[kq];B[hs]"],
                        H3_AttachDown_HaneRight: [1, 3, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]TR[fr][hp]CR[hr];W[hr];B[];W[]TR[fr]CR[ir];B[ir]C[Defender good];W[iq];B[gr];W[hp];B[hs];W[fr];B[jr];W[kq];B[kr]"],
                        H3_AttachUp_ExtendDown_ExtendRight: [1, 4, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]TR[fr][hr]CR[hp];W[hp];B[hr]TR[fr]CR[ip];W[ip];B[fr]"],
                        H3_AttachUp_ExtendDown_ExtendDown_Extend: [1, 4, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]TR[fr][hr]CR[hp];W[hp];B[hr]CR[fr]TR[ip];W[fr];B[ip]CR[ho]TR[iq];W[ho];B[jp];W[kp]LB[lq:A]"],
                        H3_AttachUp_ExtendDown_ExtendDown_Cut_Cut_Ladder: [1, 12, "AB[dn][dp][eq][ph]AW[fq][fp][jq]AE[fo];B[hq];W[hp];B[hr]CR[fr]TR[ip];W[fr];B[ip]TR[ho]CR[iq];W[iq];B[jp];W[kq];B[gp];W[ho];B[go]CR[gq]TR[hn];W[gq]C[Attacker good. Ladder works];B[hn]"],
                        H3_AttachUp_ExtendDown_ExtendDown_Cut_Cut_Net: [1, 16, "AB[dn][dp][eq]AW[fq][fp][jq][ph]AE[fo];B[hq]TR[fr][hr]CR[hp];W[hp];B[hr]CR[fr]TR[ip];W[fr];B[ip]TR[ho]CR[iq];W[iq];B[jp];W[kq];B[kp];W[lq];B[lp];W[mq];B[gp];W[ho];B[go]CR[gq]TR[hn];W[gq]C[Attacker good. Net works];B[hn]"],
                        H3_AttachUp_ExtendDown_ExtendDown_Cut_Extend: [1, 16, "AB[dn][dp][eq]AW[fq][fp][jq][ph]AE[fo];B[hq]TR[fr][hr]CR[hp];W[hp];B[hr]CR[fr]TR[ip];W[fr];B[ip]TR[ho]CR[iq];W[iq];B[jp];W[kq];B[kp];W[lq];B[lp];W[mq];B[gp];W[ho];B[go];W[hn];B[gq];W[cq]"],
                        H3_AttachUp_Bump: [1, 3, "AB[dn][dp][eq]AW[fq][fp][jq]PL[B]AE[jp];B[hq]TR[fr][hr]CR[hp];W[hp];B[iq]C[Defender good];W[ip];B[jr];W[kq];B[kr];W[lq];B[lr];W[mq];B[gr];W[fr]"],
                        H3_Extend_ExtendUp_JumpRight: [1, 5, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]CR[fr]TR[hp][hr];W[fr]CR[hp]TR[iq];B[hp];W[fn]TR[hn]CR[jp];B[jp];W[kq];B[kp];W[lq];B[im]"],
                        H3_Extend_ExtendUp_JumpUp: [1, 5, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]CR[fr]TR[hp][hr];W[fr]CR[hp]TR[iq];B[hp];W[fn]CR[hn]TR[jp];B[hn];W[fl];B[];W[];B[mq]"],
                        H3_Extend_ExtendRight: [1, 3, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]CR[fr]TR[hp][hr];W[fr]TR[hp]CR[iq];B[iq];W[jp];B[ho];W[fn]"],
                        H3_ShoulderHit: [1, 2, "AB[dn][dp][eq]AW[fq][fp][jq]AE[fo][ph];B[hq]TR[fr][hp][hr]CR[ip];W[ip]C[Attacker good];B[hn];W[hp];B[];W[];B[fr];W[gr];B[er];W[hr]"],
                        H2: [1, 1, "AB[dn][dp][eq]AW[fq][fp][jq]PL[B]AE[jp]C[Defender good];B[hr];W[hq];B[fr];W[gr];B[gs];W[gq];B[dr]"],
                    },
                },
                SanSan: {
                    Enabled: false,
                },
            },
            C3_4: {
                Enabled: false,
                // DGC 01-03-23 DAN https://vimeo.com/803854104/5e3e349534
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
        // https://senseis.xmp.net/?CornerShapes
        // Go\Learning\Corner L LD.sgf
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