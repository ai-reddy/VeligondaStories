import { redirect } from "next/navigation";

type ClaimsEvidenceAliasProps = { params: Promise<{ locale: string }> };

export default async function ClaimsEvidenceAlias({ params }: ClaimsEvidenceAliasProps) {
  const { locale } = await params;
  redirect(`/${locale}/claims-and-evidence`);
}
