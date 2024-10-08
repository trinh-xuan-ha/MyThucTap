import { TbWash } from "react-icons/tb";
import { TbBleachOff } from "react-icons/tb";
import { TbIroning2 } from "react-icons/tb";

interface DescriptionContentProps {
    description: string;
}
interface TabContentProps {
    activeTab: string;
    currentItem: string;
}
const TabContent = ({ activeTab, currentItem }: TabContentProps) => {
    switch (activeTab) {
        case 'description':
            return <DescriptionContent description={currentItem} />;
        case 'delivery':
            return <DeliveryContent />;
        case 'shipping':
            return <ShippingContent />;
        case 'custom':
            return <CustomContent />;
        default:
            return null;
    }
};

const DescriptionContent = ({ description }: DescriptionContentProps) => (

    <div className="my-10 flex flex-col gap-y-4">
        <div>
            <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-col gap-y-6">
            <div className="flex item-center -ml-6">
                <div className="relative flex items-center h-16 justify-center">
                    <TbWash stroke-width="-1" className=" w-28 h-16" />
                    <p className="absolute font-bold bottom-3">30&#176;</p>
                </div>

                <TbBleachOff stroke-width="-1" className=" w-28 h-16" />
                <TbIroning2 stroke-width="-1" className=" w-28 h-16" />
            </div>
            <ul className="mt-6 uppercase list-disc list-inside ml-3 text-sm">
                <li>MACHINE WASH AT MAX.TEMP. 30° C - NORMAL PROCESS</li>
                <li>DO NOT BLEACH</li>
                <li>DO NOT TUMBLE DRY</li>
                <li>IRON AT MAX. TEMP. OF 110° C WITHOUT STEAM</li>
                <li>DO NOT DRY CLEAN</li>
            </ul>
            <div className="flex flex-col gap-y-3 ">
                <p className="text-xs font-bold">Sample Ordered Lista</p>
                <ul className=" normal-case list-decimal list-inside ml-3 text-sm ">
                    <li>Comodous in tempor ullamcorper miaculis</li>
                    <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                    <li>Divamus sit amet purus justo.</li>
                    <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-3">
                <p className="text-xs font-bold">Sample Paragraph Text</p>
                <p className="text-sm">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you`re ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you`re ready for summe!Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
        </div>
        <div>

        </div>
    </div>
);

const DeliveryContent = () => (
    <div className="my-10 flex flex-col gap-y-4">
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, lectus ac pretium maximus, magna neque fermentum arcu, ut pulvinar arcu erat vel massa. Pellentesque ac arcu blandit, vestibulum tortor eget, dictum magna. Curabitur sit amet metus nulla. Pellentesque et augue et urna volutpat vestibulum vitae eget ligula. Maecenas mi augue, faucibus scelerisque facilisis in, dignissim vitae justo. Sed venenatis lectus et leo malesuada iaculis. Nunc lacinia arcu id elementum rhoncus. Duis tempor, enim vel vulputate interdum, magna sapien lacinia enim, nec lobortis quam enim eu erat. Aenean faucibus ex vitae nibh accumsan ullamcorper. Sed a orci augue. Maecenas porttitor venenatis semper.</p>
    </div>

);

const ShippingContent = () => (
    <div className="my-10 flex flex-col gap-y-4">
        <p className="text-sm py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus libero quis mauris vestibulum dapibus.
            Maecenas ullamcorper erat mi, vel consequat enim suscipit at. Pellentesque a elit at elit</p>
    </div>

);

const CustomContent = () => (
    <div className="my-10 flex flex-col gap-y-4">
        <table>
            <tr>
                <td>Lo rem ipsum dolor sit amet</td>
                <td>Maecenas ullamcorper erat mi, vel consequat enim suscipit at.</td>
            </tr>
            <tr>
                <td>Quisque in felis ut tellus</td>
                <td>Pellentesque a elit at elit auctor tempus sed vitae mi</td>
            </tr>
            <tr>
                <td>Morbi blandit auctor</td>
                <td>Vestibulum sollicitudin tortor dui, quis aliquet sapien convallis sed.</td>
            </tr>
            <tr>
                <td>Sed sit qmet risus velit lacinia gravida</td>
                <td>Aenean interdum elementum arcu. Vivamus purus lorem, semper quis libero et.</td>
            </tr>
            <tr>
                <td>Morbi dictum orci neque</td>
                <td>Curabitur vehicula tellus sit amet neque placerat, vel sagittis</td>
            </tr>
        </table>
    </div>
);

export default TabContent;