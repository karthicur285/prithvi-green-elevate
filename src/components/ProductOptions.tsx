import { CheckCircle } from "lucide-react";

const protectionGrades = [
  { grade: "IP20", available: true },
  { grade: "IP23", available: true },
  { grade: "IP66", available: true },
];

const sillOptions = [
  { name: "Aluminum Cladding Sill", available: true },
  { name: "Aluminum Sill", available: true },
  { name: "Stainless Steel Sill", available: true },
];

const ProductOptions = () => {
  return (
    <div className="bg-muted/40 rounded-lg p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Protection Grade */}
        <div>
          <h4 className="font-heading font-bold text-base text-foreground mb-4">Protection Grade</h4>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="bg-primary text-primary-foreground px-4 py-2.5 text-left font-heading font-semibold rounded-tl-lg">IP Grade</th>
                <th className="bg-primary text-primary-foreground px-4 py-2.5 text-center font-heading font-semibold rounded-tr-lg">Optional</th>
              </tr>
            </thead>
            <tbody>
              {protectionGrades.map((item, i) => (
                <tr key={item.grade} className={i % 2 === 1 ? "bg-background" : ""}>
                  <td className="px-4 py-3 font-body text-foreground">{item.grade}</td>
                  <td className="px-4 py-3 text-center">
                    {item.available && <CheckCircle className="w-5 h-5 text-primary mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sill Options */}
        <div>
          <h4 className="font-heading font-bold text-base text-foreground mb-4">Sill Option</h4>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="bg-primary text-primary-foreground px-4 py-2.5 text-left font-heading font-semibold rounded-tl-lg">Sill Types</th>
                <th className="bg-primary text-primary-foreground px-4 py-2.5 text-center font-heading font-semibold">Picture</th>
                <th className="bg-primary text-primary-foreground px-4 py-2.5 text-center font-heading font-semibold rounded-tr-lg">Optional</th>
              </tr>
            </thead>
            <tbody>
              {sillOptions.map((item, i) => (
                <tr key={item.name} className={i % 2 === 1 ? "bg-background" : ""}>
                  <td className="px-4 py-3 font-body text-foreground">{item.name}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="w-16 h-12 bg-muted rounded mx-auto flex items-center justify-center">
                      <div className="w-10 h-8 border-2 border-foreground/20 rounded-sm" />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.available && <CheckCircle className="w-5 h-5 text-primary mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
