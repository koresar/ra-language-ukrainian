module.exports = {
    ra: {
        action: {
            delete: 'Видалити',
            show: 'Перегляд',
            list: 'Перелік',
            save: 'Зберегти',
            create: 'Створити',
            edit: 'Редагувати',
            sort: 'Сортувати',
            cancel: 'Відмінити',
            undo: 'Скасувати',
            refresh: 'Оновити',
            add: 'Додати',
            remove: 'Видалити',
            add_filter: 'Додати фільтр',
            remove_filter: 'Прибрати фільтр',
            back: 'Повернутися назад',
            bulk_actions: '%{smart_count} обрано',
        },
        boolean: {
            true: 'Так',
            false: 'Ні',
        },
        page: {
            list: '%{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Створити %{name}',
            dashboard: 'Головна',
            not_found: 'Не знайдено',
            loading: 'Завантаження',
        },
        input: {
            file: {
                upload_several:
                    'Перетягніть файли сюди, або натисніть для вибору.',
                upload_single: 'Перетягніть файл сюди, або натисніть для вибору.',
            },
            image: {
                upload_several:
                    'Перетягніть зображення сюди, або натисніть для вибору.',
                upload_single:
                    'Перетягніть зображення сюди, або натисніть для вибору.',
            },
            references: {
                all_missing: 'Неможливо знайти дані посилань.',
                many_missing:
                    "Щонайменьше одне з пов'язаних посилань більше не доступно.",
                single_missing:
                    "Пов'язане посилання більше не доступно.",
            },
        },
        message: {
            yes: 'Так',
            no: 'Ні',
            are_you_sure: 'Ви впевнені?',
            about: 'Довідка',
            not_found:
                'Ви набрали невірний URL-адресу, або перейшли за хибним посиланням.',
            loading: 'Сторінка завантажується, хвилинку будь ласка',
            invalid_form: 'Форма недійсна. Перевірте помилки',
            delete_title: 'Видалити %{name} #%{id}',
            delete_content: 'Ви впевнені що хочете видалити цей елемент?',
            bulk_delete_title:
                'Видалити %{name} |||| Видалити %{smart_count} %{name} елементів',
            bulk_delete_content:
                'Ви дійсно хочете видалити це %{name}? |||| Ви впевнені що хочете видалити ці %{smart_count} %{name}?',
        },
        navigation: {
            no_results: 'Результатів не знайдено',
            no_more_results:
                'Номер сторінки %{page} знаходиться за межами кордонів. Спробуйте попередню сторінку.',
            page_out_of_boundaries: 'Сторінка %{page} поза межами',
            page_out_from_end: 'Неможливо переміститися далі останньої сторінки',
            page_out_from_begin: 'Номер сторінки не може бути менше 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} із %{total}',
            next: 'Наступна',
            prev: 'Попередня',
        },
        auth: {
            username: "Ім'я користувача",
            password: 'Пароль',
            sign_in: 'Ввійти',
            sign_in_error: 'Помилка аутентифікації, спробуйте знову',
            logout: 'Вийти',
        },
        notification: {
            updated: 'Елемент оновлено |||| %{smart_count} елемент оновлено',
            created: 'Елемент створений',
            deleted: 'Елемент видалений |||| %{smart_count} елемент видалено',
            bad_item: 'Хибний елемент',
            item_doesnt_exist: 'Елемент не існує',
            http_error: 'Помилка сервера',
            canceled: 'Дія відмінена',
        },
        validation: {
            required: "Обов'язково для заповнення",
            minLength: 'Мінімальна кількість символів %{min}',
            maxLength: 'Максимальна кількість символів %{max}',
            minValue: 'Мінімальне значення %{min}',
            maxValue: 'Значення може бути %{max} або менше',
            number: 'Повинна бути цифра',
            email: 'Хибний email',
            oneOf: 'Повинен бути одним з: %{options}',
            regex: 'Повинен відповідати певним форматом (регулярний вираз): %{pattern}',
        },
    },
};
