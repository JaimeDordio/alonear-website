"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";

import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <>
      {/* Horizontal buttons */}
      <div className="grid bg-black-50 grid-cols-2 gap-1 rounded-lg p-1">
        {routing.locales.map((cur) => (
          <div key={cur}>
            <input
              type="radio"
              name="option"
              id={cur}
              value={cur}
              className="peer hidden"
              checked={locale === cur}
              disabled={isPending}
              onChange={() => onSelectChange(cur)}
            />
            <label
              htmlFor={cur}
              className="block shadow-md cursor-pointer select-none rounded-md px-1 font-medium text-sm text-center peer-checked:bg-black-500 peer-checked:text-white"
            >
              {cur.toUpperCase()}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
