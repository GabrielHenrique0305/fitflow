export const manifest = {
  screens: {
    scr_ikh9cj: { name: "Login", route: "/", state: { "tela": "login" }, position: { "x": 160, "y": 220 } },
    scr_nqb79h: { name: "Início", route: "/", state: { "tela": "dashboard" }, position: { "x": 160, "y": 2200 } },
    scr_nxa534: { name: "Treino do dia", route: "/", state: { "tela": "treino" }, position: { "x": 1560, "y": 2200 } },
    scr_h8gxvj: { name: "Detalhe do exercício", route: "/", state: { "tela": "exercicio" }, position: { "x": 2960, "y": 2200 } },
    scr_72e6xh: { name: "Progresso", route: "/", state: { "tela": "progresso" }, position: { "x": 160, "y": 4180 } },
    scr_p9hl37: { name: "Perfil", route: "/", state: { "tela": "perfil" }, position: { "x": 1560, "y": 4180 } },
    scr_vj0w1f: { name: "Acessibilidade", route: "/", state: { "tela": "acessibilidade" }, position: { "x": 160, "y": 6160 } },
    scr_hu4jdi: { name: "Início — alto contraste", route: "/", state: { "tela": "dashboard", "altoContraste": true }, position: { "x": 1560, "y": 6160 } },
    scr_qlf4pa: { name: "Início — texto muito grande", route: "/", state: { "tela": "dashboard", "escalaTexto": "maior" }, position: { "x": 2960, "y": 6160 } },
    scr_q6hj71: { name: "Exercício — alto contraste", route: "/", state: { "tela": "exercicio", "altoContraste": true }, position: { "x": 4360, "y": 6160 } }
  },
  sections: {
    sec_2npv6g: { name: "Authentication", x: 0, y: 0, width: 1520, height: 1180 },
    sec_yy9jhy: { name: "Main Workout Flow", x: 0, y: 1980, width: 4320, height: 1180 },
    sec_yurcxf: { name: "User Features", x: 0, y: 3960, width: 2920, height: 1180 },
    sec_1l1rad: { name: "Accessibility Variants", x: 0, y: 5940, width: 5720, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_2npv6g", children: [
    { kind: "screen", id: "scr_ikh9cj" }]
  },
  { kind: "section", id: "sec_yy9jhy", children: [
    { kind: "screen", id: "scr_nqb79h" },
    { kind: "screen", id: "scr_nxa534" },
    { kind: "screen", id: "scr_h8gxvj" }]
  },
  { kind: "section", id: "sec_yurcxf", children: [
    { kind: "screen", id: "scr_72e6xh" },
    { kind: "screen", id: "scr_p9hl37" }]
  },
  { kind: "section", id: "sec_1l1rad", children: [
    { kind: "screen", id: "scr_vj0w1f" },
    { kind: "screen", id: "scr_hu4jdi" },
    { kind: "screen", id: "scr_qlf4pa" },
    { kind: "screen", id: "scr_q6hj71" }]
  }]

};