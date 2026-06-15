-- Tabela de briefings do formulário /formulario
-- Executar no SQL Editor do Supabase

CREATE TABLE IF NOT EXISTS public.briefings (
  id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Etapa 1 — Sobre você e o projeto
  nome_e_negocio              TEXT NOT NULL,
  area_atuacao                TEXT NOT NULL,
  objetivo_site               TEXT[] NOT NULL,
  objetivo_outro              TEXT,
  site_atual                  TEXT,

  -- Etapa 2 — Público e comunicação
  publico_alvo                TEXT NOT NULL,
  tom_comunicacao             TEXT[] NOT NULL,
  tom_outro                   TEXT,
  diferenciais                TEXT NOT NULL,
  depoimentos                 TEXT,

  -- Etapa 3 — Identidade visual
  tem_logo                    TEXT NOT NULL,
  estilo_visual               TEXT[] NOT NULL,
  cores_preferencia           TEXT NOT NULL,
  sites_referencia            TEXT NOT NULL,
  sites_evitar                TEXT,

  -- Etapa 4 — Conteúdo do site
  texto_apresentacao          TEXT NOT NULL,
  servicos                    TEXT NOT NULL,
  secao_processo              TEXT,
  processo_texto              TEXT,
  faq                         TEXT,
  tem_fotos                   TEXT,

  -- Etapa 5 — Contato e localização
  whatsapp                    TEXT NOT NULL,
  email_formulario            TEXT NOT NULL,
  cidade_estado               TEXT NOT NULL,
  endereco_fisico             TEXT,
  redes_sociais               TEXT,
  horario_atendimento         TEXT,

  -- Etapa 6 — Domínio e e-mail
  tem_dominio                 TEXT NOT NULL,
  dominio_texto               TEXT,
  tipo_email                  TEXT NOT NULL,
  email_existente_texto       TEXT,
  telefone_recuperacao        TEXT NOT NULL,

  -- Etapa 7 — SEO
  termos_busca                TEXT NOT NULL,
  frase_titulo                TEXT,

  -- Etapa 8 — Prazo e finais
  prazo                       TEXT NOT NULL,
  prazo_data                  TEXT,
  observacoes_finais          TEXT
);

-- RLS habilitado — inserção apenas via service role na API (sem policy pública)
ALTER TABLE public.briefings ENABLE ROW LEVEL SECURITY;

-- Índice para consultas por data
CREATE INDEX IF NOT EXISTS briefings_created_at_idx ON public.briefings (created_at DESC);
