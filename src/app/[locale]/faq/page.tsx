import { CollapseProps } from "antd";
import { useTranslations } from "next-intl";
import { FAQ } from "../../../../components/FAQ/FAQ";

export default function FrequentlyAskedQuestions() {
  const t = useTranslations("FAQ");
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: t("question1"),
      children: <p>{t("answer1")}</p>,
    },
    {
      key: "2",
      label: t("question2"),
      children: <p>{t("answer2")}</p>,
    },
    {
      key: "3",
      label: t("question3"),
      children: <p>{t("answer3")}</p>,
    },
    {
      key: "4",
      label: t("question4"),
      children: <p>{t("answer4")}</p>,
    },
    {
      key: "5",
      label: t("question5"),
      children: <p>{t("answer5")}</p>,
    },
    {
      key: "6",
      label: t("question6"),
      children: <p>{t("answer6")}</p>,
    },
    {
      key: "7",
      label: t("question7"),
      children: <p>{t("answer7")}</p>,
    },
    {
      key: "8",
      label: t("question8"),
      children: <p>{t("answer8")}</p>,
    },
    {
      key: "9",
      label: t("question9"),
      children: <p>{t("answer9")}</p>,
    },
    {
      key: "10",
      label: t("question10"),
      children: <p>{t("answer10")}</p>,
    },
    {
      key: "11",
      label: t("question11"),
      children: <p>{t("answer11")}</p>,
    },
    {
      key: "12",
      label: t("question12"),
      children: <p>{t("answer12")}</p>,
    },
  ];
  return (
    <main className="content" style={{ padding: "100px 0" }}>
      <FAQ title={t("frequentlyAskedQuestions")} items={items} />
    </main>
  );
}
