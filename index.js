module.exports = {
    ra: {
        action: {
            add_filter: 'Додати фільтр',
            add: 'Додати',
            back: 'Повернутися назад',
            bulk_actions: '%{smart_count} обрано',
            cancel: 'Відмінити',
            clear_input_value: 'Очистити',
            clone: 'Створити дублікат',
            create: 'Створити',
            delete: 'Видалити',
            edit: 'Редагувати',
            export: 'Експортувати',
            list: 'Перелік',
            refresh: 'Оновити',
            remove_filter: 'Прибрати фільтр',
            remove: 'Видалити',
            save: 'Зберегти',
            search: 'Пошук',
            show: 'Перегляд',
            sort: 'Сортувати',
            undo: 'Скасувати',
        },
        boolean: {
            true: 'Так',
            false: 'Ні',
        },
        page: {
            create: 'Створити %{name}',
            dashboard: 'Головна',
            edit: '%{name} #%{id}',
            error: 'Щось пішло не так',
            list: '%{name}',
            loading: 'Завантаження',
            not_found: 'Не знайдено',
            show: '%{name} #%{id}',
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
            about: 'Довідка',
            are_you_sure: 'Ви впевнені?',
            bulk_delete_content:
                'Ви дійсно хочете видалити це %{name}? |||| Ви впевнені що хочете видалити ці %{smart_count} %{name}?',
            bulk_delete_title:
                'Видалити %{name} |||| Видалити %{smart_count} %{name} елементів',
            delete_content: 'Ви впевнені що хочете видалити цей елемент?',
            delete_title: 'Видалити %{name} #%{id}',
            details: 'Деталі',
            error:
               "Виникла помилка на стороні клієнта і ваш запит не був завершений.",
            invalid_form: 'Форма недійсна. Перевірте помилки',
            loading: 'Сторінка завантажується, хвилинку будь ласка',
            no: 'Ні',
            not_found:
                'Ви набрали невірний URL-адресу, або перейшли за хибним посиланням.',
            yes: 'Так',
        },
        navigation: {
            no_results: 'Результатів не знайдено',
            no_more_results:
                'Номер сторінки %{page} знаходиться за межами кордонів. Спробуйте попередню сторінку.',
            page_out_of_boundaries: 'Сторінка %{page} поза межами',
            page_out_from_end: 'Неможливо переміститися далі останньої сторінки',
            page_out_from_begin: 'Номер сторінки не може бути менше 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} із %{total}',
            page_rows_per_page: 'Рядків на сторінці:',
            next: 'Наступна',
            prev: 'Попередня',
        },
        auth: {
            user_menu: 'Профіль',
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
            data_provider_error:
                'Помилка в dataProvider. Перевірте деталі в консолі.',
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
