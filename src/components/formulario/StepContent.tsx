"use client";

import type { BriefingFormValues } from "@/lib/formulario/constants";
import {
  DEPOIMENTOS_OPTIONS,
  ESTILO_VISUAL_OPTIONS,
  OBJETIVO_SITE_OPTIONS,
  PRAZO_OPTIONS,
  SECAO_PROCESSO_OPTIONS,
  TEM_DOMINIO_OPTIONS,
  TEM_FOTOS_OPTIONS,
  TEM_LOGO_OPTIONS,
  TIPO_EMAIL_OPTIONS,
  TOM_COMUNICACAO_OPTIONS,
} from "@/lib/formulario/constants";
import type { StepErrors } from "@/lib/formulario/validate-step";
import { maskWhatsApp } from "@/lib/formulario/masks";
import {
  CheckboxGroup,
  ConditionalField,
  FieldWrapper,
  RadioGroup,
  TextArea,
  TextInput,
  type FormUpdater,
} from "./FormFields";

type StepContentProps = {
  step: number;
  values: BriefingFormValues;
  update: FormUpdater;
  errors: StepErrors;
};

export function StepContent({ step, values, update, errors }: StepContentProps) {
  switch (step) {
    case 1:
      return (
        <div className="space-y-6">
          <FieldWrapper
            label="Nome e negócio"
            required
            htmlFor="nome_e_negocio"
            error={errors.nome_e_negocio}
          >
            <TextInput
              id="nome_e_negocio"
              value={values.nome_e_negocio}
              onChange={(v) => update("nome_e_negocio", v)}
              placeholder="Ex: Ana Silva — Studio Pilates"
              error={!!errors.nome_e_negocio}
              autoComplete="name"
            />
          </FieldWrapper>
          <FieldWrapper
            label="Área de atuação"
            required
            htmlFor="area_atuacao"
            error={errors.area_atuacao}
          >
            <TextInput
              id="area_atuacao"
              value={values.area_atuacao}
              onChange={(v) => update("area_atuacao", v)}
              placeholder="Ex: Fisioterapia, advocacia, restaurante..."
              error={!!errors.area_atuacao}
            />
          </FieldWrapper>
          <FieldWrapper
            label="Objetivo do site"
            required
            error={errors.objetivo_site}
          >
            <CheckboxGroup
              name="objetivo_site"
              options={OBJETIVO_SITE_OPTIONS}
              value={values.objetivo_site}
              onChange={(v) => update("objetivo_site", v)}
              error={!!errors.objetivo_site}
            />
          </FieldWrapper>
          <ConditionalField show={values.objetivo_site.includes("Outro")}>
            <FieldWrapper
              label="Outro objetivo"
              required
              htmlFor="objetivo_outro"
              error={errors.objetivo_outro}
            >
              <TextInput
                id="objetivo_outro"
                value={values.objetivo_outro}
                onChange={(v) => update("objetivo_outro", v)}
                placeholder="Descreva o objetivo"
                error={!!errors.objetivo_outro}
              />
            </FieldWrapper>
          </ConditionalField>
          <FieldWrapper label="Site atual (se houver)" htmlFor="site_atual">
            <TextInput
              id="site_atual"
              value={values.site_atual}
              onChange={(v) => update("site_atual", v)}
              placeholder="https://..."
            />
          </FieldWrapper>
        </div>
      );

    case 2:
      return (
        <div className="space-y-6">
          <FieldWrapper
            label="Público-alvo"
            required
            htmlFor="publico_alvo"
            error={errors.publico_alvo}
          >
            <TextArea
              id="publico_alvo"
              value={values.publico_alvo}
              onChange={(v) => update("publico_alvo", v)}
              placeholder="Quem você quer atingir? Idade, perfil, dores, localização..."
              error={!!errors.publico_alvo}
            />
          </FieldWrapper>
          <FieldWrapper
            label="Tom de comunicação"
            required
            error={errors.tom_comunicacao}
          >
            <CheckboxGroup
              name="tom_comunicacao"
              options={TOM_COMUNICACAO_OPTIONS}
              value={values.tom_comunicacao}
              onChange={(v) => update("tom_comunicacao", v)}
              error={!!errors.tom_comunicacao}
            />
          </FieldWrapper>
          <ConditionalField show={values.tom_comunicacao.includes("Outro")}>
            <FieldWrapper
              label="Outro tom"
              required
              htmlFor="tom_outro"
              error={errors.tom_outro}
            >
              <TextInput
                id="tom_outro"
                value={values.tom_outro}
                onChange={(v) => update("tom_outro", v)}
                placeholder="Descreva o tom desejado"
                error={!!errors.tom_outro}
              />
            </FieldWrapper>
          </ConditionalField>
          <FieldWrapper
            label="Diferenciais"
            required
            htmlFor="diferenciais"
            error={errors.diferenciais}
          >
            <TextArea
              id="diferenciais"
              value={values.diferenciais}
              onChange={(v) => update("diferenciais", v)}
              placeholder="O que te diferencia da concorrência?"
              error={!!errors.diferenciais}
            />
          </FieldWrapper>
          <FieldWrapper label="Depoimentos de clientes">
            <RadioGroup
              name="depoimentos"
              options={DEPOIMENTOS_OPTIONS}
              value={values.depoimentos}
              onChange={(v) => update("depoimentos", v)}
            />
          </FieldWrapper>
        </div>
      );

    case 3:
      return (
        <div className="space-y-6">
          <FieldWrapper label="Logo" required error={errors.tem_logo}>
            <RadioGroup
              name="tem_logo"
              options={TEM_LOGO_OPTIONS}
              value={values.tem_logo}
              onChange={(v) => update("tem_logo", v)}
              error={!!errors.tem_logo}
            />
          </FieldWrapper>
          <FieldWrapper label="Estilo visual" required error={errors.estilo_visual}>
            <CheckboxGroup
              name="estilo_visual"
              options={ESTILO_VISUAL_OPTIONS}
              value={values.estilo_visual}
              onChange={(v) => update("estilo_visual", v)}
              error={!!errors.estilo_visual}
            />
          </FieldWrapper>
          <FieldWrapper
            label="Cores de preferência"
            required
            htmlFor="cores_preferencia"
            error={errors.cores_preferencia}
          >
            <TextInput
              id="cores_preferencia"
              value={values.cores_preferencia}
              onChange={(v) => update("cores_preferencia", v)}
              placeholder="Ex: azul marinho, dourado, tons neutros..."
              error={!!errors.cores_preferencia}
            />
          </FieldWrapper>
          <FieldWrapper
            label="Sites de referência"
            required
            htmlFor="sites_referencia"
            error={errors.sites_referencia}
          >
            <TextArea
              id="sites_referencia"
              value={values.sites_referencia}
              onChange={(v) => update("sites_referencia", v)}
              placeholder="Links ou nomes de sites que você gosta"
              error={!!errors.sites_referencia}
            />
          </FieldWrapper>
          <FieldWrapper label="Sites a evitar" htmlFor="sites_evitar">
            <TextInput
              id="sites_evitar"
              value={values.sites_evitar}
              onChange={(v) => update("sites_evitar", v)}
              placeholder="Estilos ou referências que não quer"
            />
          </FieldWrapper>
        </div>
      );

    case 4:
      return (
        <div className="space-y-6">
          <FieldWrapper
            label="Texto de apresentação"
            required
            htmlFor="texto_apresentacao"
            error={errors.texto_apresentacao}
          >
            <TextArea
              id="texto_apresentacao"
              value={values.texto_apresentacao}
              onChange={(v) => update("texto_apresentacao", v)}
              placeholder="Como você se apresenta? História, missão, proposta de valor..."
              rows={5}
              error={!!errors.texto_apresentacao}
            />
          </FieldWrapper>
          <FieldWrapper
            label="Serviços"
            required
            htmlFor="servicos"
            error={errors.servicos}
          >
            <TextArea
              id="servicos"
              value={values.servicos}
              onChange={(v) => update("servicos", v)}
              placeholder="Liste os serviços ou produtos que o site deve apresentar"
              rows={5}
              error={!!errors.servicos}
            />
          </FieldWrapper>
          <FieldWrapper label="Seção de processo / como funciona">
            <RadioGroup
              name="secao_processo"
              options={SECAO_PROCESSO_OPTIONS}
              value={values.secao_processo}
              onChange={(v) => update("secao_processo", v)}
            />
          </FieldWrapper>
          <ConditionalField show={values.secao_processo === "Sim, vou descrever"}>
            <FieldWrapper
              label="Descrição do processo"
              required
              htmlFor="processo_texto"
              error={errors.processo_texto}
            >
              <TextArea
                id="processo_texto"
                value={values.processo_texto}
                onChange={(v) => update("processo_texto", v)}
                placeholder="Descreva as etapas do seu processo"
                error={!!errors.processo_texto}
              />
            </FieldWrapper>
          </ConditionalField>
          <FieldWrapper label="FAQ (perguntas frequentes)" htmlFor="faq">
            <TextArea
              id="faq"
              value={values.faq}
              onChange={(v) => update("faq", v)}
              placeholder="Perguntas e respostas que gostaria de incluir (opcional)"
            />
          </FieldWrapper>
          <FieldWrapper label="Fotos">
            <RadioGroup
              name="tem_fotos"
              options={TEM_FOTOS_OPTIONS}
              value={values.tem_fotos}
              onChange={(v) => update("tem_fotos", v)}
            />
          </FieldWrapper>
        </div>
      );

    case 5:
      return (
        <div className="space-y-6">
          <FieldWrapper
            label="WhatsApp"
            required
            htmlFor="whatsapp"
            error={errors.whatsapp}
          >
            <TextInput
              id="whatsapp"
              value={values.whatsapp}
              onChange={(v) => update("whatsapp", maskWhatsApp(v))}
              placeholder="(21) 99999-9999"
              error={!!errors.whatsapp}
              autoComplete="tel"
            />
          </FieldWrapper>
          <FieldWrapper
            label="E-mail"
            required
            htmlFor="email_formulario"
            error={errors.email_formulario}
          >
            <TextInput
              id="email_formulario"
              type="email"
              value={values.email_formulario}
              onChange={(v) => update("email_formulario", v)}
              placeholder="seu@email.com"
              error={!!errors.email_formulario}
              autoComplete="email"
            />
          </FieldWrapper>
          <FieldWrapper
            label="Cidade / Estado"
            required
            htmlFor="cidade_estado"
            error={errors.cidade_estado}
          >
            <TextInput
              id="cidade_estado"
              value={values.cidade_estado}
              onChange={(v) => update("cidade_estado", v)}
              placeholder="Ex: Rio de Janeiro, RJ"
              error={!!errors.cidade_estado}
            />
          </FieldWrapper>
          <FieldWrapper label="Endereço físico" htmlFor="endereco_fisico">
            <TextInput
              id="endereco_fisico"
              value={values.endereco_fisico}
              onChange={(v) => update("endereco_fisico", v)}
              placeholder="Rua, número, bairro (se aplicável)"
            />
          </FieldWrapper>
          <FieldWrapper label="Redes sociais" htmlFor="redes_sociais">
            <TextInput
              id="redes_sociais"
              value={values.redes_sociais}
              onChange={(v) => update("redes_sociais", v)}
              placeholder="@instagram, linkedin.com/in/..."
            />
          </FieldWrapper>
          <FieldWrapper label="Horário de atendimento" htmlFor="horario_atendimento">
            <TextInput
              id="horario_atendimento"
              value={values.horario_atendimento}
              onChange={(v) => update("horario_atendimento", v)}
              placeholder="Ex: Seg–Sex, 9h–18h"
            />
          </FieldWrapper>
        </div>
      );

    case 6:
      return (
        <div className="space-y-6">
          <FieldWrapper label="Domínio" required error={errors.tem_dominio}>
            <RadioGroup
              name="tem_dominio"
              options={TEM_DOMINIO_OPTIONS}
              value={values.tem_dominio}
              onChange={(v) => update("tem_dominio", v)}
              error={!!errors.tem_dominio}
            />
          </FieldWrapper>
          <ConditionalField show={values.tem_dominio === "Sim"}>
            <FieldWrapper
              label="Qual domínio?"
              required
              htmlFor="dominio_texto"
              error={errors.dominio_texto}
            >
              <TextInput
                id="dominio_texto"
                value={values.dominio_texto}
                onChange={(v) => update("dominio_texto", v)}
                placeholder="Ex: meunegocio.com.br"
                error={!!errors.dominio_texto}
              />
            </FieldWrapper>
          </ConditionalField>
          <FieldWrapper label="Tipo de e-mail" required error={errors.tipo_email}>
            <RadioGroup
              name="tipo_email"
              options={TIPO_EMAIL_OPTIONS}
              value={values.tipo_email}
              onChange={(v) => update("tipo_email", v)}
              error={!!errors.tipo_email}
            />
          </FieldWrapper>
          <ConditionalField show={values.tipo_email === "Já tenho"}>
            <FieldWrapper
              label="E-mail existente"
              required
              htmlFor="email_existente_texto"
              error={errors.email_existente_texto}
            >
              <TextInput
                id="email_existente_texto"
                value={values.email_existente_texto}
                onChange={(v) => update("email_existente_texto", v)}
                placeholder="contato@seudominio.com.br"
                error={!!errors.email_existente_texto}
              />
            </FieldWrapper>
          </ConditionalField>
          <FieldWrapper
            label="Telefone de recuperação"
            required
            htmlFor="telefone_recuperacao"
            error={errors.telefone_recuperacao}
          >
            <TextInput
              id="telefone_recuperacao"
              value={values.telefone_recuperacao}
              onChange={(v) => update("telefone_recuperacao", v)}
              placeholder="Celular para recuperação de contas"
              error={!!errors.telefone_recuperacao}
            />
          </FieldWrapper>
        </div>
      );

    case 7:
      return (
        <div className="space-y-6">
          <FieldWrapper
            label="Termos de busca (SEO)"
            required
            htmlFor="termos_busca"
            error={errors.termos_busca}
          >
            <TextArea
              id="termos_busca"
              value={values.termos_busca}
              onChange={(v) => update("termos_busca", v)}
              placeholder="Palavras que seu cliente digitaria no Google para te encontrar"
              rows={5}
              error={!!errors.termos_busca}
            />
          </FieldWrapper>
          <FieldWrapper label="Frase de título (opcional)" htmlFor="frase_titulo">
            <TextInput
              id="frase_titulo"
              value={values.frase_titulo}
              onChange={(v) => update("frase_titulo", v)}
              placeholder="Ex: Seu parceiro em transformação digital"
            />
          </FieldWrapper>
        </div>
      );

    case 8:
      return (
        <div className="space-y-6">
          <FieldWrapper label="Prazo desejado" required error={errors.prazo}>
            <RadioGroup
              name="prazo"
              options={PRAZO_OPTIONS}
              value={values.prazo}
              onChange={(v) => update("prazo", v)}
              error={!!errors.prazo}
            />
          </FieldWrapper>
          <ConditionalField show={values.prazo === "Sim"}>
            <FieldWrapper
              label="Data desejada"
              required
              htmlFor="prazo_data"
              error={errors.prazo_data}
            >
              <TextInput
                id="prazo_data"
                value={values.prazo_data}
                onChange={(v) => update("prazo_data", v)}
                placeholder="Ex: até 15/07/2026"
                error={!!errors.prazo_data}
              />
            </FieldWrapper>
          </ConditionalField>
          <FieldWrapper
            label="Observações finais"
            htmlFor="observacoes_finais"
          >
            <TextArea
              id="observacoes_finais"
              value={values.observacoes_finais}
              onChange={(v) => update("observacoes_finais", v)}
              placeholder="Algo mais que queira compartilhar?"
            />
          </FieldWrapper>

          {/* Honeypot — invisível via CSS, não display:none */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
          >
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>

          <p className="text-xs leading-relaxed text-muted">
            Seus dados serão usados exclusivamente para elaboração da proposta e não
            serão compartilhados com terceiros.
          </p>
        </div>
      );

    default:
      return null;
  }
}
