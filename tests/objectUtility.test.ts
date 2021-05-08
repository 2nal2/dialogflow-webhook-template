import { omitKeyBy } from "../api/util/objectUtilities";

describe("test for object utilities", () => {
    test("test remove of keys by dot", () => {
        const data = {
            testDriveDateTime: '2020-05-20T12:00:00-05:00',
            'testDriveDateTime.original': 'tomorrow',
            testDriveTime: '2020-05-19T12:00:00-05:00',
            'testDriveTime.original': '12:00 p.m.',
            bodyStyle: 'Van',
            'bodyStyle.original': 'van',
            brand: '_',
            year: '0',
            model: '_',
            stockNumber: 57583,
            'stockNumber.original': '57583',
            phone: 77665146,
            'phone.original': '77665146',
            customerName: { name: 'Donaldo Vargas' },
            'customerName.original': 'Donaldo Vargas',
            email: 'donaldov7@gmail.com',
            'email.original': 'donaldov7@gmail.com',
            paymentMethod: 'Finance',
            'paymentMethod.original': 'Finance',
            'no-input': 0,
            'no-match': 0
        };

        const result = omitKeyBy(data, (key: string) => {
            return /\.|\-/.test(key)
        });

        expect(Object.keys(result).length).toBe(11);
    });


    it('remove nested keys on object', () => {
        const data = {
            a: "abc",
            b: ["a", "b", { "x": 1, "x.original": 2 }],
            "c.original": "adsab",
            c: {"m": "1", "n": "2", "o": "3", "q.a": "test", z : ["a", {b: {"a.x": 1}}]}
        }
        
        const result = omitKeyBy(data, (key: string) => {
            return /\.|\-/.test(key)
        });

        expect(result).toStrictEqual({
            "a": "abc",
            "b": [
              "a",
              "b",
              {
                "x": 1
              }
            ],
            "c": {
              "m": "1",
              "n": "2",
              "o": "3",
              "z": [
                "a",
                {
                  "b": {}
                }
              ]
            }
          });
    });
});