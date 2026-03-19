# Task Contract Standard

Этот стандарт фиксирует минимальный контракт задачи для **landing-factory**. Его цель — не усложнить работу лишней бюрократией, а сделать так, чтобы перед implementation или release-изменениями было понятно, что именно разрешено менять, на что опирается работа и как будет проверяться результат.

## Назначение

Task contract нужен для задач, где исполнитель затрагивает код, assets, routing, release-контур или устойчивую документацию. Если задача не проходит этот минимальный фильтр, её легко увести в ложные предположения, смешение контекстов и рискованные правки вне фактического scope.

## Обязательные поля

Перед началом implementation-работы или релизного пакета должны быть определены следующие поля.

| Поле | Что должно быть зафиксировано |
|---|---|
| `scope` | Какие файлы, каталоги и слои проекта можно менять |
| `source_of_truth` | Какие файлы, standards, playbooks, project-docs и страницы считаются опорой |
| `deliverable` | Какой конкретный артефакт должен появиться или измениться в репозитории |
| `validation` | Как именно будет проверяться результат: build, diff review, route check, visual review, staging check |
| `exclusions` | Что явно нельзя менять в рамках текущего пакета |

## Правило готовности

Если хотя бы одно обязательное поле не определено, задача не считается безопасно подготовленной к реализации. В таком случае исполнитель должен вернуться на шаг audit или specification, а не продолжать работу по памяти.

## Минимальный формат

Task contract не обязан быть большим документом. В большинстве случаев достаточно короткой таблицы в проектном документе, issue, ADR-ссылке или рабочем playbook.

| Поле | Пример |
|---|---|
| `scope` | `src/pages/offer801.astro`, `public/assets/offer801/`, `docs/projects/offer801/` |
| `source_of_truth` | `docs/projects/offer801/`, `docs/playbooks/agent-operating-model.md`, эталон `src/pages/745-kvartal.astro` |
| `deliverable` | handcrafted-page `offer801` и связанный docs-пакет |
| `validation` | локальный build, route check, visual smoke review |
| `exclusions` | не менять unrelated pages, Netlify config и другие slugs |

## Scope discipline

Task contract не должен использоваться как формальность задним числом. Его задача — ограничить blast radius до начала правок. Если в процессе стало понятно, что нужно менять больше файлов или другой слой архитектуры, contract должен быть обновлён явно, а не расширен молча.

## Связанные документы

- `docs/playbooks/agent-operating-model.md`
- `docs/standards/git-workflow.md`
- `docs/standards/content-governance.md`
